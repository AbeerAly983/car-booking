<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\Validator;

trait CarValidation
{
    public function CheckCarValidation($data){
        $validate=Validator::make($data, [
            'type'=>'required|string',
            'model'=>'required|string',
            'first_release'=>'required|numeric',
            'price_rent'=>'required|numeric',
            'governorate'=>'required|string',
            'city'=>'required|string',
            'address'=>'required',
            'photos'=>'required',
            'phone'=>'required|numeric'

        ]);
        return $validate;}
     public function CheckUpdateCarValidation($data){
        $validate=Validator::make($data, [
            'type'=>'required|string',
            'model'=>'required|string',
            'first_release'=>'required|numeric',
            'price_rent'=>'required|numeric',
            'governorate'=>'required|string',
            'city'=>'required|string',
            'address'=>'required',
            'phone'=>'required|numeric'

        ]);
        return $validate;}
    public function CheckRentCarValidation($data){
        $validate=Validator::make($data, [
            'start_date'=>'required',
            'end_date'=>'required',
            'user_id'=>'required',
            'car_id'=>'required',
            'total_price'=>'required',
            'num_days'=>'required',
            'phone'=>'required|numeric|min:10'

        ]);
        return $validate;}
   

}
