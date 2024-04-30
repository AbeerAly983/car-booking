<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Traits\otpValidation;
use App\Models\User;
use Illuminate\Http\Request;
use Otp;

class VerifyEmailController extends Controller
{
    use otpValidation;
    private $otp;

    public function __construct(){
        $this->otp = new Otp;
    }

    public function verify_email(Request $request){
        $validator = $this->otpValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);

        $otp = $this->otp->validate($request->email, $request->otp);

        if(!$otp->status)
            return response(['error' => 'OTP Is Wrong']);

        User::where('email', $request->email)->update(['email_verified_at' => now()]);
        return response(['success' => 'true']);
    }
}

