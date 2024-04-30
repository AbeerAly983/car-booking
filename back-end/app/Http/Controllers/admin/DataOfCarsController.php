<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\DateOfRent;
use App\Models\Photo;
use App\Models\rent;
use App\Models\User;
use Carbon\Carbon;
use DemeterChain\C;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataOfCarsController extends Controller
{
    public function __construct(){
        $this->middleware('auth:admin');
    }
    public function cars_wait_approval(){
        $cars=Car::where('approved',0)->get();
        return response($cars);

    }
    public function AnnualProfits(){
       $year=DateOfRent::select(
           DB::raw('year(created_at) as year'),
           DB::raw('sum(price) as value'),
       )
           ->whereNotNull('created_at')
           ->whereYear('created_at',Carbon::now()->format('Y'))
           ->groupBy('year')
           ->get()
           ->toArray();
        return ($year);
    }
    public function MonthlyProfits(){
        $month=DateOfRent::select(

            DB::raw('month(created_at) as month'),
            DB::raw('sum(price) as value'),
        )
            ->whereNotNull('created_at')
            ->whereYear('created_at',Carbon::now()->format('Y'))

            ->groupBy('month')
            ->get()
            ->toArray();
        return ($month);
    }
    public function Total_rent_car(){
        $month=rent::select(
            DB::raw('car_id as car'),
            DB::raw('count(car_id) as value'),
        )
            ->groupBy('car')
            ->get()
            ->toArray();
        return ($month);
    }
    public function Annual_rent_car(){
        $month=rent::select(
            DB::raw('car_id as car'),
            DB::raw('count(car_id) as value'),
        )
            ->groupBy('car')
            ->whereYear('created_at',Carbon::now()->format('Y'))
            ->get()
            ->toArray();
        return ($month);
    }

    public function Monthly_rent_car(){
        $month=rent::select(
            DB::raw('car_id as car'),
            DB::raw('count(car_id) as value'),
        )
            ->groupBy('car')
            ->whereYear('created_at',Carbon::now()->format('Y'))
            ->whereMonth('created_at',Carbon::now()->format('M'))
            ->get()
            ->toArray();
        return ($month);
    }
    public function users_added_this_year(){
        $month=User::select(
            DB::raw('month(created_at) as month'),
            DB::raw('count(id) as value'),
        )
            ->whereNotNull('created_at')
            ->whereYear('created_at',Carbon::now()->format('Y'))

            ->groupBy('month')
            ->get()
            ->toArray();
        return ($month);
    }
    public function delete_car($id){
        $delete_car=Car::where('id',$id)->delete();
        $delete_photo=Photo::where('car_id',$id)->delete();
        if($delete_car){
            return response()->json(['message' => 'Deleted Successfully']);
        }
        return response()->json(['message' => 'Failed To Delete']);
    }
    public function approve_car($id){
      $car=Car::find($id);
      $car->approved=true;
      $car->save();
        if($car){
            return Response()->json(['message' => 'Approved completed successfully']);
        }
        return response()->json(['message' => 'Failed To Approve']);
    }


    public function count_users(){
        $users=User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')->get();
        $num_all_users=$users->count();
        $num_company=$users->where('role_id','2')->count();
        $num_users=$users->where('role_id','1')->count();
        return response(['num_all_users'=>$num_all_users,'number_company'=>$num_company,'num_users'=>$num_users]);
    }
    public function all_users(){
        $users=User::get();
        return response($users);
    }
    public function companies(){
        $users = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')->where('role_id', '2')->get()->toArray();
        return response($users);
    }
    public function users(){
        $users = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')->where('role_id', '1')->get()->toArray();
        return response($users);
    }


    public function count_cars(){
        $cars=Car::get();
        $num_all_cars=$cars->count();
        $num_disable_cars=$cars->where('disable',1)->count();
        $num_cars_wait_approve=$cars->where('approved',0)->count();
        $num_active_cars=$cars->where('status',1)->count();
        $num_not_pay_cars=$cars->where('status',0)->where('approved',1)->count();
        return response(['data'=>$cars,'num_all_cars'=>$num_all_cars,'num_disable_cars'=>$num_disable_cars,
            'num_cars_wait_approve'=>$num_cars_wait_approve,'num_active_cars'=>$num_active_cars,
            'num_not_pay_cars'=>$num_not_pay_cars]);
    }
    public function all_cars(){
        $cars=Car::with('photos')->get();
        return response($cars);
    }
    public function disable_cars(){
        $disable_cars=Car::with('photos')->where('disable',1)->get();
        return response($disable_cars);
    }
    public function cars_wait_approve(){
        $cars_wait_approve=Car::where('approved',0)->count();
         return response($cars_wait_approve);
    }
    public function active_cars(){
        $cars=Car::with('photos')->where('status',1)->get();
        return response($cars);
    }
    public function not_pay_cars(){
        $not_pay_cars=Car::with('photos')->where('status',0)->where('approved',1)->get();
        return response($not_pay_cars);
    }

    public function count_subscription(){
        $subscriptions=DateOfRent::get();
        $num_all_subscription=$subscriptions->count();
        $num_one_month_subscription=$subscriptions->where('Subscription_period',30)->count();
        $num_three_months_subscription=$subscriptions->where('Subscription_period',90)->count();
        $num_one_year_subscription=$subscriptions->where('Subscription_period',365)->count();

        return response(['num_all_subscription'=>$num_all_subscription,
            'num_one_month_subscription'=>$num_one_month_subscription,
            'num_three_months_subscription'=>$num_three_months_subscription,
            'num_one_year_subscription'=>$num_one_year_subscription,

        ]);
    }
    public function all_subscription(){
        $subscriptions=DateOfRent::get();
        return response($subscriptions);
    }
    public function one_month_subscription(){
        $one_month_subscription=DateOfRent::where('Subscription_period',30)->get();
        return response($one_month_subscription);
    }
    public function three_month_subscription(){
        $three_month_subscription=DateOfRent::where('Subscription_period',90)->get();
        return response($three_month_subscription);
    }
    public function one_year_subscription(){
        $one_year_subscription=DateOfRent::where('Subscription_period',365)->get();
        return response($one_year_subscription);
    }

    public function num_subscription_paid(){

        $num_subscription_paid_today=DateOfRent::whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_subscription_paid_this_month=DateOfRent::whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->count();
        $num_subscription_paid_this_year=DateOfRent::whereYear('created_at',Carbon::now()->format('Y'))->count();
        return response([
            'num_subscription_paid_today'=>$num_subscription_paid_today,
            'num_subscription_paid_this_month'=>$num_subscription_paid_this_month,
            'num_subscription_paid_this_year'=>$num_subscription_paid_this_year
        ]);
    }
    public function all_subscription_paid(){
        $subscriptions=DateOfRent::get();
        return response($subscriptions);
    }
    public function subscription_paid_today(){
        $subscription_paid_today=DateOfRent::whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($subscription_paid_today);
    }
    public function subscription_paid_this_month(){
        $subscription_paid_this_month=DateOfRent::whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($subscription_paid_this_month);
    }
    public function subscription_paid_this_year(){
        $subscription_paid_this_year=DateOfRent::whereYear('created_at',Carbon::now()->format('Y'))->get();
        return response($subscription_paid_this_year);
    }


    public function sum_subscription(){
        $total_sum_subscription=DateOfRent::sum('price');
        $sum_subscription_paid_today=DateOfRent::whereDay('created_at',Carbon::now()->format('d'))
            ->whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->sum('price');
        $sum_subscription_paid_this_month=DateOfRent::whereMonth('created_at',Carbon::now()->format('m'))
            ->whereYear('created_at',Carbon::now()->format('Y'))->sum('price');
        $sum_subscription_paid_this_year=DateOfRent::whereYear('created_at',Carbon::now()->format('Y'))->sum('price');
        return response(['total_sum_subscription'=>$total_sum_subscription,
            'sum_subscription_paid_today'=>$sum_subscription_paid_today,
            'sum_subscription_paid_this_month'=>$sum_subscription_paid_this_month,
            'sum_subscription_paid_this_year'=>$sum_subscription_paid_this_year
        ]);
    }
    public function end_subscription(){
        $subscription_end_today=DateOfRent::whereDay('end_date',Carbon::now()->format('d'))
            ->whereMonth('end_date',Carbon::now()->format('m'))
            ->whereYear('end_date',Carbon::now()->format('Y'))->count();
        $subscription_end_this_month=DateOfRent::whereMonth('end_date',Carbon::now()->format('m'))
            ->whereYear('end_date',Carbon::now()->format('Y'))->count();
        return response(['subscription_end_today'=>$subscription_end_today,
            'subscription_end_this_month'=>$subscription_end_this_month
        ]);
    }
    public function subscription_end_today(){
        $end_today=DateOfRent::whereDay('end_date',Carbon::now()->format('d'))
            ->whereMonth('end_date',Carbon::now()->format('m'))
            ->whereYear('end_date',Carbon::now()->format('Y'))->get();
        return response($end_today);

    }
    public function subscription_end_this_month(){
        $subscription_end_month=DateOfRent::whereMonth('end_date',Carbon::now()->format('m'))
            ->whereYear('end_date',Carbon::now()->format('Y'))->get();
        return response($subscription_end_month);
    }


}
