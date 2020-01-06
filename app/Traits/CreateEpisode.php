<?php

namespace App\Traits;

use App\Episode;

trait CreateEpisode {
        public function createEpisode($project_id,$episode_name) {
                $episode = new Episode();
                $episode->name = $episode_name;
                $episode->project_id = $project_id;
                $episode->root_video = 0;
                $episode->meta = '{}';
                $episode->save(); 
        }
}
