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
    public function episode() {
        return $this->belongsTo(Episode::class);
    }
    public function connections() {
        return $this->belongsToMany(Video::class, 'connections', 'entry_id', 'out_id');
    }
}
