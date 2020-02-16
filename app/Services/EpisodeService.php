<?php

namespace App\Services;

use App\Episode;
use Auth;
use Illuminate\Http\Request;

class EpisodeService {
	public function store($data) {
		$episode = new Episode();
        $episode->name = $data["episode_name"];
        $episode->project_id = $data["project_id"];
        $episode->root_video = 0;
        $episode->meta = '{}';
        $episode->save(); 
        return $episode;
	}
}
?>