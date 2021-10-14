<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table ='cliente';
    protected $primarykey ='doc';

    public function reservas(){
        return $this->hasMany(reservas::class);
    }
  
}
