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

                
                $filename_horiz = $data["filename_horiz"];
                $filename_vert = $data["filename_vert"];
                $video->filename_horiz = $filename_horiz;
                $video->filename_vert = $filename_vert;
                $video->episode_id = $episode_id;
                $video->project_id = $project_id;
                $video->meta = $data['meta'];
                
                if(isset($data["url_horizontal"])) {
                        $path_horiz = Storage::putFileAs("project/{$project_id}/episode/{$episode_id}", $data["url_horizontal"], $filename_horiz);
                        
                } else {
                        $path_horiz = $data["url_horiz"];
                }

                if(isset($data["url_vertical"])) {
                        $path_vert = Storage::putFileAs("project/{$project_id}/episode/{$episode_id}", $data["url_vertical"], $filename_vert);
                        $video->url_vertical = "/storage/{$path_vert}";
                }

                
                $video->url_horizontal = "/storage/{$path_horiz}";
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