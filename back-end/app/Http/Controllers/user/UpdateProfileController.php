<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Traits\updateProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UpdateProfileController extends Controller
{
    use updateProfile;
    public function __construct(){
        $this->middleware('auth:api');
    }
    public function edit()
    {
        $id = Auth::user()->id;
        $user=User::find($id);
        return $user;
    }

    public function update(Request $request)
    {
        $id = Auth::user()->id;
        $validation = $this->Check_Update_Profile_Validation($request->all());
        if($validation->fails()){
            return response()->json(['message' => $validation->getMessageBag()->first()]);
        }
        User::where('id', $id)->update($request->all());;
}
    public function change_password(Request $request){
        $id = Auth::user()->id;
        $validator =$this->Check_Change_Password_Validation($request->all());
        if($validator->fails()){
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        else{
            $user=User::find($id);
            if($request->old_password==$request->new_password){
                return response()->json(['message' => "There isn't password change"]);
            }elseif (Hash::check($request->old_password,$user->password)) {
                $user->password=bcrypt($request->new_password);
                $user->save();
                return response()->json(['message' => "Password Updated"]);


            }else{
                return response()->json(['message' => "Password not correct"]);
            }

        }
}}
