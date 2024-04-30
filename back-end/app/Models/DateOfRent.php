<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DateOfRent extends Model
{
    use HasFactory;
   protected $fillable=['start_date','end_date','car_id','price','Subscription_period'];

}
