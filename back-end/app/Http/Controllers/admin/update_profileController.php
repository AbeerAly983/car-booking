<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Http\Traits\updateProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class update_profileController extends Controller
{
    use updateProfile;
    public function __construct(){
        $this->middleware('auth:admin');
    }
    public function edit()
    {
        $id = auth()->guard('admin')->user()->id;
        $admin=Admin::find($id);
        return $admin;
    }

    // public function update_email(Request $request)
    // {
    //     $id = auth()->guard('admin')->user()->id;
    //     $validation = $this->Check_Update_Profile_Validation($request->all());
    //     if($validation->fails()){
    //         return response()->json(['message' => $validation->getMessageBag()->first()]);
    //     }
    //     Admin::where('id', $id)->update($request->all());;
    // }
    
    public function update_profile(Request $request)
    {
    $id = auth()->guard('admin')->user()->id;
    $validation = $this->Check_Update_Profile_Validation($request->all());
    if ($validation->fails()) {
        return response()->json(['message' => $validation->getMessageBag()->first()]);
    }
    $admin = Admin::find($id);
    if (!$admin) {
        return response()->json(['message' => 'Admin not found.']);
    }
    $admin->update([
        'email' => $request->input('email'),
        'name' => $request->input('name'),
    ]);
        return response()->json(['message' => 'Profile updated successfully.']);
    }

    public function change_password(Request $request){
        $id = auth()->guard('admin')->user()->id;
        $validator =$this->Check_Change_Password_Validation($request->all());
        if($validator->fails()){
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        else{
            $user=Admin::find($id);
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
