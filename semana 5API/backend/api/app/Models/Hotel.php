<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $table = 'hotel';

    public function habitacion(){
        return $this->hasMany(habitacion::class);
    }
          
}
