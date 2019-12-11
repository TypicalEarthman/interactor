<?php

namespace App\Http\Controllers\Custom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function index(Request $request) {

        $project = \App\Project::find($request->project);
        $project_id = $project->id;
        $videos = $project->videos;
        return view('editor.index',[
            'videos' => $videos,
            'project_id' => $project_id
        ]);
    }
}
