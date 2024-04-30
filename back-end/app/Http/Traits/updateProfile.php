<?php

namespace App\Http\Traits;
use Validator;

trait updateProfile
{
    public function Check_Update_Profile_Validation($data){
        $validator = Validator::make($data, [
            'email' => 'required | email',
            'name' => 'required | string',
        ]);
        return $validator;
    }
    public function Check_Update_Admin_Profile_Validation($data){
        $validator = Validator::make($data, [
            'email' => 'required | email',

        ]);
        return $validator;
    }
    public function Check_Change_Password_Validation($data){
        $validate=Validator::make($data, [
            'old_password' => 'required',
            'new_password' => 'required|string|confirmed|min:6',
        ]);
        return $validate;
    }
}
