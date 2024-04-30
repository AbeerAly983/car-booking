<?php

namespace App\Http\Traits;

use Validator;

Trait passwordValidation{

    public function resetValidation($data){
        $validator = Validator::make($data, [
            'email' => 'required|email|exists:Users',
            'otp' => 'required',
            'password' => 'required|confirmed'
        ]);
        return $validator;
    }
    public function resetAdminValidation($data){
        $validator = Validator::make($data, [
            'email' => 'required|email|exists:admins',
            'otp' => 'required',
            'password' => 'required|confirmed'
        ]);
        return $validator;
    }

}
