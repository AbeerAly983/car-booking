<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Traits\AuthValidation;
use App\Models\User;
use App\Notifications\sendOtp;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class AuthController extends Controller
{
    use AuthValidation;

    public function __construct(){
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    public function login(Request $request){
        $validator = $this->loginValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);

        if($token = auth()->attempt($validator->validated()))
            return $this->createToken($token);
        return response(['error' => $this->checkError($request->all())]);

    }

    public function register(Request $request){
        $this->delete_user($request->email);
        $validator = $this->registerValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $role = Role::where('name', $request->role)->first();
        $user->assignRole($role);
        $user->givePermissionTo($role->permissions);
        $user->notify(new sendOtp());
        return response(['message' => 'Successfully Registeration']);
    }

    public function logout(){
        auth()->logout();
        return response(['message' => 'Signed out']);
    }

    private function createToken($token){
        return response([
            'token' => $token,
            'token_type' => 'bearer',
            'role' => auth()->user()->roles->pluck('name'),
            'user' => auth()->user(),

        ]);
    }

    private function delete_user($email){
        if($this->checkNotVerification($email))
            User::where('email', $email)->delete();
    }
    public function profile(){
        $user_id=auth()->id();
        $user=User::with('roles')->find($user_id);
        return response($user);
    }
}
