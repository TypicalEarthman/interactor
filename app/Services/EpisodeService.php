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

	public function set_root($data) {
		$id = $data["id"];
        $episode_id = $data["episode_id"];
       
        Episode::where('id', $episode_id)
            ->update([
                'root_video' => $id
            ]);
        $episode = Episode::where('id', $episode_id)->first();
        return $episode;
	}
}
?>