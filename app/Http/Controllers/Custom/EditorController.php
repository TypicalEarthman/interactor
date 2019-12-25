<?php

namespace App\Http\Controllers\Custom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class EditorController extends Controller
{
    public function index(Request $request) {
        
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
