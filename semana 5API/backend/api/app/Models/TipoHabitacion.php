<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class TipoHabitacion extends Model
{
    protected $table = 'TipoHabitacion';

    public function habitacion(){
        return $this->hasMany(habitacion::class);
    }
     
}
