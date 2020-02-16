<?php

namespace App\Http\Controllers;

use App\Project;
use Auth;
use Illuminate\Http\Request;
use App\Services\ProjectService;
use App\Services\VideoService;
use App\Services\ConnectionService;

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
    public function generate(
        ProjectService $projectService, 
        VideoService $videoService,
        ConnectionService $connectionService) {

        $data = $projectService->store([
            "name" => "Привет!",
        ]);

        $root = $videoService->store([
            "episode_id" => $data["episode"]->id,
            "project_id" => $data["project"]->id,
            "name" => "Кекушка",
            "filename" => "kek.mp4",
            "url" => "starter/kek.mp4"
        ]);

        $root_1 = $videoService->store([
            "episode_id" => $data["episode"]->id,
            "project_id" => $data["project"]->id,
            "name" => "Кекуasdasdasdшка",
            "filename" => "kek2.mp4",
            "url" => "starter/kek2.mp4"
        ]);

        $root_2 = $videoService->store([
            "episode_id" => $data["episode"]->id,
            "project_id" => $data["project"]->id,
            "name" => "Кеasdasdsaddшка",
            "filename" => "kek2.mp4",
            "url" => "starter/kek2.mp4"
        ]);

        $connectionService->store([
            "episode_id" => $data["episode"]->id,
            "entry_id" => $root->id,
            "out_id" => $root_1->id,
        ]);

        $connectionService->store([
            "episode_id" => $data["episode"]->id,
            "entry_id" => $root->id,
            "out_id" => $root_2->id,
        ]);

        return redirect()->route('episode.show', [
            'project_id' => $data["project"]->id,
            'episode_id' => $data["episode"]->id,
        ]);
    }
}
