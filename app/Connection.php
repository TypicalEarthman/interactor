<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Connection extends Model
{
    protected $casts = [
        'meta' => '{}'
    ];
    public function project() {
        return $this->belongsTo(Project::class);
    }
    public function episode() {
        return $this->belongsTo(Episode::class);
    }
    public function videos() {
        return $this->belongsToMany(Video::class);
    }
}
