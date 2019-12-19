<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{    
    protected $casts = [
        'meta' => '{}'
    ];
    public function project() {
        return $this->belongsTo(Project::class);
    }
}
