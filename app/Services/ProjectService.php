<?php

namespace App\Services;

use App\Project;
use Auth;
use Illuminate\Http\Request;
use App\Services\EpisodeService;

class ProjectService {
	public $episodeService;

	public function __construct() {
		$this->episodeService = new EpisodeService();
	}

	public function store($data) {
        $project = new Project();

        if(Auth::check()) {
			$project->user_id = Auth::user()->id;
		}

        $project->name = $data["name"];
        
        $project_id = 0;
        if ($project->save()) {
            $project_id = $project->id;
        }

       $episode =  $this->episodeService->store([
        	"project_id" => $project_id,
        	"episode_name" => 'Episode 1',
        ]);

        return [
        	"project" => $project,
        	"episode" => $episode
        ];
	}
	
}
?>