<?php

namespace App\Http\Controllers;

use App\Project;
use Auth;
use Illuminate\Http\Request;
use App\Services\ProjectService;
use App\Services\VideoService;

class ProjectController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }
    
    public function index()
    {
        
    }


    public function create(Request $request, ProjectService $projectService)
    {
        $projectService->store([
            "name" => $request->name,
        ]);

        return redirect()->back();
    }

    public function store(Request $request)
    {
        //
    }


    public function show(Project $project)
    {
        return $project;
    }

    public function edit(Project $project)
    {
        //
    }

    public function update(Request $request, Project $project)
    {
        //
    }

    public function destroy(Project $project)
    {
        //
    }





    // custom
    public function generate(ProjectService $projectService, VideoService $videoService) {
        $data = $projectService->store([
            "name" => "Привет!",
        ]);

        $videoService->store([
            "episode_id" => $data["episode"]->id,
            "project_id" => $data["project"]->id,
            "name" => "Кекушка",
            "filename" => "kek.mp4",
            "url" => "starter/kek.mp4"
        ]);

        return redirect()->route('episode.show', [
            'project_id' => $data["project"]->id,
            'episode_id' => $data["episode"]->id,
        ]);
    }
}
