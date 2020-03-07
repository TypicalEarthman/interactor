<?php

namespace App\Services;

use App\Episode;
use Auth;
use Illuminate\Http\Request;
use App\Video;
use Illuminate\Support\Facades\Storage;
use App\Services\EpisodeService;

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
                $video->meta = $data['meta'];
                
                if(isset($data["video"])) {
                        $path = Storage::putFileAs("project/{$project_id}/episode/{$episode_id}", $data["video"], $filename);
                        
                } else {
                        $path = $data["url"];
                }

                
                $video->url = "/storage/{$path}";
                //$video->filename = $data["video"]->hashName;

                
                $video->save();
                
                $episode = Episode::where('id', $episode_id)->first();
                $episode_videos = $episode->videos;

                if(count($episode_videos) == 1) {
                        $episodeService = new EpisodeService;
                        $episodeService->set_root([
                                "id" => $episode_videos->first()->id,
                                "episode_id" => $episode_id,
                        ]);
                       
                }
                return $video;
                
	}
	public function destroy($data) {
                
                $episode_id = $data["episode_id"];
                $video_id = $data['id'];
                
                Video::destroy($data['id']);
                $episode = Episode::where('id', $episode_id)->first();
                $episode_videos = $episode->videos;

                return $episode_videos;
                
	}
	
}
?>