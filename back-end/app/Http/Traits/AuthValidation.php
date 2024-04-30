<?php

namespace App\Http\Traits;

use App\Models\Admin;
use Validator;
use App\Models\User;

Trait AuthValidation{

    public function loginValidation($data){
        $validator = Validator::make($data, [
            'email' => 'required | email',
            'password' => 'required | string',
        ]);
        return $validator;
    }

    public function registerValidation($data){
        $validator = Validator::make($data,[
            'name' => 'required | string | min:3',
            'email' => 'required | email | unique:users',
            'password' => 'required | string | confirmed',
            'role' => 'required | string | in:user,company',
        ]);
        return $validator;
    }

    public function checkError($data){
        $user = User::where('email', $data['email'])->first();
        if($user)
            return 'password is wrong';
        return 'email is wrong';
    }
    public function checkAdminError($data){
        $admin = Admin::where('email', $data['email'])->first();
        if($admin)
            return 'password is wrong';
        return 'email was wrong';
    }

    public function checkNotVerification($email){
        $user = User::where('email', $email)->where('email_verified_at', null)->first();
        if($user)
            return true;
        return false;

    }
}
