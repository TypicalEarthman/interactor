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
        return view('projects.show',[
            'episodes' => $project->episodes,
            'project_id' => $project->id
        ]);
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
            "name" => "Main",
            "filename_horiz" => "1.mp4",
            "filename_vert" => null,
            "url_horiz" => "starter/1.mp4",
            "url_vertical" => null,
            "meta" => '{"x":34.599998474121094,"y":101}'
        ]);

        $root_1 = $videoService->store([
            "episode_id" => $data["episode"]->id,
            "project_id" => $data["project"]->id,
            "name" => "I want to view result",
            "filename_horiz" => "1_1.mp4",
            "filename_vert" => null,
            "url_horiz" => "starter/1_1.mp4",
            "url_vertical" => null,
            "meta" => '{"x":363.5999984741211,"y":28}'
        ]);

        $root_2 = $videoService->store([
            "episode_id" => $data["episode"]->id,
            "project_id" => $data["project"]->id,
            "name" => "I want to upload my video",
            "filename_horiz" => "1_2.mp4",
            "filename_vert" => null,
            "url_horiz" => "starter/1_2.mp4",
            "url_vertical" => null,
            "meta" => '{"x":368.5999984741211,"y":212}'
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
