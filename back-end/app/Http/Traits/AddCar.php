<?php

namespace App\Http\Traits;
use App\Models\Car;
use Illuminate\Http\Request;

trait AddCar
{
    public function addCar(Request $request,$UserId){
        $car = new Car();
        $car->type = $request->type;
        $car->model = $request->model;
        $car->first_release = $request->first_release;
        $car->price_rent = $request->price_rent;
        $car->governorate = $request->governorate;
        $car->city = $request->city;
        $car->address = $request->address;
        $car->phone = $request->phone;
        $car->user_id=$UserId;
        $car->save();
        return $car->id;
    }

}
