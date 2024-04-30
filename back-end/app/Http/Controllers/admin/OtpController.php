<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\otpValidation;
use App\Models\Admin;
use App\Notifications\sendOtp;
use DB;
use Illuminate\Http\Request;


class OtpController extends Controller
{
    use otpValidation;

    public function resend(Request $request){
        $validator = $this->resendAdminValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);

        $this->destroy($request->email);
        $user = Admin::where('email' , $request->email)->first();
        $user->notify(new sendOtp());
        return response(['success' => true]);
    }

    public  function destroy($email){
        DB::table('otps')->where('identifier', $email)->delete();
    }
}
