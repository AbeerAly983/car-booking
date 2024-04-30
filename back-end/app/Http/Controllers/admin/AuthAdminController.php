<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\AuthValidation;
use App\Models\Admin;
use Illuminate\Http\Request;

class AuthAdminController extends Controller
{
    use AuthValidation;

    public function __construct(){
        $this->middleware('auth:admin', ['except' => ['login']]);
    }
    public function login(Request $request){
        $validator = $this->loginValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);

        if($token = auth()->guard('admin')->attempt($validator->validated()))
            return $this->createToken($token);
        return response(['error' => $this->checkAdminError($request->all())]);
    }
    public function logout(){
        auth()->guard('admin')->logout();
        return response(['message' => 'Signed out']);
    }
    private function createToken($token){
        return response([
            'token' => $token,
            'token_type' => 'bearer',
            'user' => auth()->user(),

        ]);
    }
    public function profile(){
        return response()->json(auth()->guard('admin')->user());
    }
}
