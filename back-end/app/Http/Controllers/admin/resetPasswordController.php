<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\passwordValidation;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Otp;

class resetPasswordController extends Controller
{
    use passwordValidation;
    private $otp;

    public function __construct(){
        $this->otp = new Otp;
    }

    public function reset_password(Request $request){
        $validator = $this->resetAdminValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);

        $otp2 = $this->otp->validate($request->email, $request->otp);
        if(!$otp2->status){
            return response(['error'=>'This Code Incorrect']);
        }
        $user = Admin::where('email', $request->email)->first();
        $user->password = bcrypt($request->password);
        $user->save();
        return response(['sucess'=>true]);

    }
}
