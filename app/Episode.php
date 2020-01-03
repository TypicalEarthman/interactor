<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    protected $casts = [
        'meta' => '{}'
    ];
    public function project() {
        return $this->belongsTo(Project::class);
    }
    public function videos() {
        return $this->hasMany(Video::class);
    }
    public function connections() {
        return $this->hasMany(Connection::class);
    }
}
