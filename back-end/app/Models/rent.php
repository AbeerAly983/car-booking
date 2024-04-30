<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class rent extends Model
{
    use HasFactory;
    protected $fillable=['user_id','car_id','start_date','end_date','total_price','num_days','phone'];
    public function car():BelongsTo{
        return $this->belongsTo(Car::class);
    }

}
