<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Car extends Model
{
    use HasFactory;
    protected $fillable =['type','model', 'first_release','price_rent', 'governorate', 'city','address', 'phone','user_id','disable' ,'approved'];
    public function photos(): HasMany
    {
        return $this->hasMany(Photo::class);
    }
    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }
    public function waiting_rent(): HasMany
    {
        return $this->hasMany(waiting_rent::class);
    }
    public function rent(): HasMany
    {
        return $this->hasMany(rent::class);
    }

}
