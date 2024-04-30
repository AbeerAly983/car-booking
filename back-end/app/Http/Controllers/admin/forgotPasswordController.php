<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\otpValidation;
use App\Models\Admin;
use App\Notifications\sendOtp;
use Illuminate\Http\Request;

class forgotPasswordController extends Controller
{
    use otpValidation;
    private $otp;
    public function __construct(){
        $this->otp = new OtpController();
    }

    public function forgot_password(Request $request){
        $validator = $this->resendAdminValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);
        $this->otp->destroy($request->email);
        $user = Admin::where('email' ,$request->email)->first();
        $user->notify(new sendOtp());
        return response(['sucess'=>true],200);
    }
}
