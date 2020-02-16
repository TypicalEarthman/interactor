<?php

namespace App\Services;

use App\Episode;
use Auth;
use Illuminate\Http\Request;
use App\Video;
use Illuminate\Support\Facades\Storage;

class VideoService {
	public function store($data) {

		
        $episode_id = $data["episode_id"];
        $project_id = $data['project_id'];
        $video = new Video();
        $video->name = $data['name'];

        if(Auth::check()) {
			$video->user_id = Auth::user()->id;
		}

        
        
		$filename = $data["filename"];
        $video->filename = $filename;
        $video->episode_id = $episode_id;
        $video->project_id = $project_id;
        $video->meta = '{}';

        if(isset($data["video"])) {
        	$path = Storage::putFileAs("project/{$project_id}/episode/{$episode_id}", $data["video"], $filename);
        	
        } else {
        	$path = $data["url"];
        }

        
        $video->url = "/storage/{$path}";
        //$video->filename = $data["video"]->hashName;

        
        $video->save();

        return $video;
	}
	
}
?>