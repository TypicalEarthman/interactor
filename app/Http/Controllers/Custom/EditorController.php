<?php

namespace App\Http\Controllers\Custom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class EditorController extends Controller
{
    public function index(Request $request) {

        $project = \App\Project::find($request->project);
        $project_id = $project->id;
        $episodes = $project->episodes;
        $episode = $episodes[0];
        $episode_id = $episode->id;
        $videos = $episode->videos;
        return view('editor.index',[
            'videos' => $videos,
            'project' => $project,
            'project_id' => $project_id,
            'episodes' => $episodes,
            'episode_id'=> $episode_id
        ]);
    }
    public function preview(Request $request) {
        $project = \App\Project::find($request->project);
        $project_id = $project->id;
        $videos = $project->videos;
        return view('editor.preview',[
            'videos' => $videos
        ]);
    }
}
