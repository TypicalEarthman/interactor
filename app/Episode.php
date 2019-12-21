<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    public function project() {
        return $this->belongsTo(Project::class);
    }
    public function videos() {
        return $this->hasMany(Video::class);
    }
}
