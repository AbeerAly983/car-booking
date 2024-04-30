<?php

namespace App\Http\Traits;

use Validator;

Trait otpValidation{

    public function otpValidation($data){
        $validator = Validator::make($data, [
            'email' => 'required|email|exists:users',
            'otp' => 'required'
        ]);
        return $validator;
    }

    public function resendValidation($data){
        $validator = Validator::make($data, [
            'email' => 'required | email | exists:users'
        ]);
        return $validator;
    }
    public function otpAdminValidation($data){
        $validator = Validator::make($data, [
            'email' => 'required|email|exists:admins',
            'otp' => 'required'
        ]);
        return $validator;
    }

    public function resendAdminValidation($data){
        $validator = Validator::make($data, [
            'email' => 'required | email | exists:admins'
        ]);
        return $validator;
    }

}
