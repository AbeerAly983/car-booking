<?php

namespace App\Http\Controllers;

use App\Http\Traits\CarValidation;
use App\Http\Traits\AddCar;
use App\Http\Traits\UploadImageTrait;
use App\Models\Car;
use App\Models\Photo;
use App\Models\rent;
use App\Models\User;
use App\Models\waiting_rent;
use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\QueryBuilder\QueryBuilder;

class CarController extends Controller
{
   use CarValidation;
   use UploadImageTrait;
   use AddCar;

    public function index(){
        $cars=Car::with('photos')->with('user')->where('status', 1)->where('disable', 0)->orderBy('num_rent','desc')->paginate(6);
        $cars->map(function ($i) {
            $i->owner_name= $i->user->name;
            $i->type_owner= $i->user->roles[0]->name;
            unset($i->user);
            return $i;
        });
        return response($cars);
    }

    public function store(Request $request)
    {
        $validator = $this->CheckCarValidation($request->all());
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        $UserId = Auth::user()->id;
        $keys = array_keys($request->all());
        $insert = [];
        foreach ($keys as $key) {
            if ($key == 'photos') {
                $insert=$this->UploadImage($request,'cars');
            } }
        $data=array();

        $car_id=$this->addCar($request,$UserId);
        foreach ($insert as $key=>$value){
            array_push($data,[
                'car_id'=>$car_id,
                'photo'=>$value['photo']
            ]);}
        foreach ($data as $key){
            Photo::create($key);
        }
        return Response()->json(['message' => 'Car Added Successfully']);
    }
public function details($id){
    $data=Car::with('photos')->with('user')->where('status', 1)->where('disable', 0)->where('id', $id)->get();
    $data->map(function ($i) {
        $i->owner_name= $i->user->name;
        $i->type_owner= $i->user->roles[0]->name;
        unset($i->user);
        return $i;
    });
    $dates=$this->date($id);
    return response(['details'=>$data,'dates'=>$dates]);
}

    public function users_car(){
        $cars=Car::with('photos')
            ->join('users','cars.user_id', '=', 'users.id')
            ->join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
            ->join('roles','roles.id', '=', 'model_has_roles.role_id')
            ->where('model_has_roles.role_id','1')
            ->where('cars.status', 1)
            ->where('cars.disable', 0)
            ->select('cars.id','cars.type','cars.model','cars.first_release','cars.price_rent', 'cars.governorate','cars.city','cars.address','cars.phone','users.name AS user_name','roles.name AS role_name')
            ->orderBy('num_rent','desc')
            ->paginate(6);
        return ($cars);
    }
    public function companies_car(){
        $cars=Car::with('photos')
            ->join('users','cars.user_id', '=', 'users.id')
            ->join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
            ->join('roles','roles.id', '=', 'model_has_roles.role_id')
            ->where('model_has_roles.role_id','2')
            ->where('cars.status', 1)
            ->where('cars.disable', 0)
            ->select('cars.id','cars.type','cars.model','cars.first_release','cars.price_rent', 'cars.governorate','cars.city','cars.address','cars.phone','users.name AS user_name','roles.name AS role_name')
            ->orderBy('num_rent','desc')
            ->paginate(6);
        return ($cars);
    }
    public function value(){
        $cars=Car::select('type','governorate','first_release')->get();
        $type=$cars->pluck('type')->unique();
        $governorate=$cars->pluck('governorate')->unique();
        $first_release=$cars->pluck('first_release')->unique();
       return (['type'=>$type,'governorate'=>$governorate,'first_release'=>$first_release]);
    }
        public function filter(Request $request){
       $cars=Car::query();
       if($request->has('filter')&&data_get(request(),'filter.type')){
           $cars->where('type',data_get(request(),'filter.type'));
       }
        if($request->has('filter')&&data_get(request(),'filter.governorate')){
            $cars->where('governorate',data_get(request(),'filter.governorate'));
        }
        if($request->has('filter')&&data_get(request(),'filter.min_price')){
            $cars->where('price_rent','>=',data_get(request(),'filter.min_price'));
        }
        if($request->has('filter')&&data_get(request(),'filter.max_price')){
            $cars->where('price_rent','<=',data_get(request(),'filter.max_price'));
        }
        if($request->has('filter')&&data_get(request(),'filter.first_release')){
            $cars->where('first_release',data_get(request(),'filter.first_release'));
        }

       $cars=$cars->orderBy('num_rent','desc')->get();
        $photo=Photo::get();
        $cars->map(function ($i) use($photo) {
            $arr=[];
            foreach ($photo->where('car_id',$i->id) as $item){
                array_push($arr,$item);
            }
            $i->photos= $arr;
            return $i;
        });
        return response($cars);
    }
public function date($id){
       $cars=rent::where('car_id',$id)->get();
    $data=[];
    foreach ($cars as $car){
        $start_date=Carbon::parse($car->start_date);
        $end_date=Carbon::parse($car->end_date);

        while ($start_date<=$end_date){
            array_push($data,$start_date->toDateString());
            $start_date->addDay();
        }
    }
    $data=array_unique($data);
  return ($data);
}

public function rent_car(Request $request){
   $today = Carbon::now()->toDateString();
    $user_role=User::with('roles')->where('id',$request->user_id)->first();
    $check_if_found=waiting_rent::where('car_id',$request->car_id)->where('user_id',$request->user_id)->where('end_date',$request->end_date)->where('start_date',$request->start_date)->first();

    if($user_role->roles[0]->name=='company'){

        return response()->json(['message'=>'Not Allowed To Company To Rent car']);
    }
    if(!empty($check_if_found)){
        return response()->json(['message'=>'Your Request Already Added']);
    }

    $validator = $this->CheckRentCarValidation($request->all());
    if ($validator->fails()) {
        return response()->json(['message' => $validator->getMessageBag()->first()]);
    }
    if ($request->start_date>$request->end_date){
        return Response()->json(['message'=>'End Date Incorrect']);
    }
    if ($today>$request->end_date||$today>$request->start_date){
        return Response()->json(['message'=>'Date Incorrect']);
    }
    $data=waiting_rent::create($request->all());
    if($data){
        return Response()->json(['message' => 'Added Successfully']);
    }
    else{
        return Response()->json(['message' => 'Failed To Add']);
    }

}
public function request_wait_approval(){
       $user_id=Auth()->id();
       $cars=Car::with('waiting_rent')->where('status',1)->where('disable', 0)->where('user_id',$user_id)->get();
       $cars->map(function ($i) {
        $i->num_waiting_rent= $i->waiting_rent->count();
        unset($i->waiting_rent);
        return $i;
    });
       $data=[];
       foreach ($cars as $car){
           if($car->num_waiting_rent!=0){
               array_push($data,$car);
           }
       }
       return response($data);
}
   public function car_rent(){
        $user_id=Auth()->id();
        $data=Car::where('user_id',$user_id)->where('disable', 0)->where('num_rent','>',0)->get();
        return response($data);
    }
    public function cars(){
        $user_id=Auth()->id();
        $data=Car::with('photos')->where('user_id',$user_id)->get();
        return response($data);
    }
    public function disable($id)
    {
        $car = Car::where('id', $id)->first();

        if($car->disable == false){
            $car->disable = true;
            $car->save();
        }
        else{
            $car->disable = false;
            $car->save();
        }
        return response(['sucess'=>true]);
    }
    public  function update(Request $request,$id){
        $validator = $this->CheckUpdateCarValidation($request->all());
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
         $keys = array_keys($request->all());
        $insert = [];
        foreach ($keys as $key) {
            if ($key == 'photos') {
                if($key!=null){
                    $insert=$this->UploadImage($request,'cars');
                }
            } }
        $data=array();
        $car=Car::where('id', $id)->update($request->except(['photos']));
        if(!empty($insert)){
            foreach ($insert as $key=>$value){
                array_push($data,[
                    'car_id'=>$id,
                    'photo'=>$value['photo']
                ]);}
            foreach ($data as $key){
                Photo::create($key);
            }
        }
        return Response()->json(['message' => 'Car Updated Successfully']);
        
    }
    public function edit($id)
    {
        $car = Car::with('photos')->where('id',$id)->first();

        if($car){
            return response($car);
        }
        return response()->json(['message' => 'Not Found']);


    }
    public function delete_rent($id){
        $data=rent::where('id',$id)->first();
        $increase_rent=Car::where('id',$data->car_id)->decrement('num_rent');
        $delete=$data->delete();
        if($delete){
            return response()->json(['message' => 'Deleted Successfully']);
        }
        return response()->json(['message' => 'Failed To Delete']);
    }
    public function list_request_wait_approval($id){
        $data=waiting_rent::where('car_id',$id)->get();
        $data->map(function ($i) {
            $i->name=User::select('name')->where('id',$i->user_id)->value('name');
            unset($i->user_id);
            return $i;
        });
        return response($data);
    }
    public function list_car_rent($id){
        $data=rent::where('car_id',$id)->get();
        $data->map(function ($i) {
            $i->name=User::select('name')->where('id',$i->user_id)->value('name');
            unset($i->user_id);
            return $i;
        });
        return response($data);
    }
    public function accept_rent($id){
        $data=waiting_rent::where('id',$id)->first();
        $save_rent=rent::create(['start_date'=>$data->start_date,'end_date'=>$data->end_date,
            'user_id'=>$data->user_id,'car_id'=>$data->car_id,
            'total_price'=>$data->total_price,'num_days'=>$data->num_days,'phone'=>$data->phone]);
        $increase_rent=Car::where('id',$data->car_id)->increment('num_rent');
        if($save_rent){
            $data->delete();
            return response()->json(['message' => 'Rent Completed Successfully']);
        }
        return response()->json(['message' => 'Failed To Complete']);


    }
    public function delete_request($id){
        $delete=waiting_rent::where('id',$id)->delete();
        if($delete){
            return response()->json(['message' => 'Deleted Successfully']);
        }
        return response()->json(['message' => 'Failed To Delete']);
    }
   public function MyBooking(){
        $id=Auth()->id();
        $data=rent::where('user_id',$id)->get();
        return response($data);

    }
    public function MyBooking_wait_approve(){
        $id=Auth()->id();
        $data=waiting_rent::where('user_id',$id)->get();
        return response($data);

    }
    public function delete_photo($id){
        $delete=Photo::where('id',$id)->delete();
        if($delete){
            return response()->json(['message' => 'Deleted Successfully']);
        }
        return response()->json(['message' => 'Failed To Delete']);
    }
    public function add_photo(Request $request,$id){
        $insert = [];
        $data=array();
        $insert=$this->UploadImage($request,'cars');
        foreach ($insert as $key=>$value){
            array_push($data,[
                'car_id'=>$id,
                'photo'=>$value['photo']
            ]);}
        foreach ($data as $key){
            Photo::create($key);
        }
        return response()->json(['message' => 'Photo Added Successfully']);
    }

}


