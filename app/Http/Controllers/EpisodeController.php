<?php

namespace App\Http\Controllers;

use App\Episode;
use Illuminate\Http\Request;
use App\Services\EpisodeService;

class EpisodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }
    
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, EpisodeService $episodeService)
    {
        $project_id = $request->get('project_id');
        $name = $request->get('name');
        $episodeService->store([
            "project_id" => $project_id,
            "episode_name" => $name,
        ]);
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Episode  $episode
     * @return \Illuminate\Http\Response
     */
    public function set_root(Request $request, EpisodeService $episodeService)
    {
        return $episodeService->set_root([
            "id" => $request->id,
            "episode_id" => $request->episode_id,
        ]);
    }
    public function view(Request $request, $project_id, $episode_id)
    {
        $project = \App\Project::where('id', $project_id)->first();
        $episodes = $project->episodes;
        $episode;
        if($episode_id == 0) 
        {
            $episode = $episodes[0];
            $episode_id = $episode->id;
        }
        else 
        {
            foreach($episodes as $temp_episode) {
                if($temp_episode['id'] == $episode_id) {
                    $episode = $temp_episode;
                    break;
                }
            }
        }
        $videos = $episode->videos()->with('connections')->get();
        $root_video = $episode->root_video;
        $connections = $episode->connections;
        return view('projects/view',[
            'root_video' => $root_video,
            'videos' => $videos->keyBy('id'),
            'connections' => $connections->keyBy('entry_id'),
            'project' => $project,
            'project_id' => $project_id,
            'episodes' => $episodes,
            'episode_id'=> $episode_id
        ]);
    }
    public function show(Request $request, $project_id, $episode_id)
    {
        $project = \App\Project::where('id', $project_id)->first();
        $episodes = $project->episodes;
        $episode;
        if($episode_id == 0) 
        {
            $episode = $episodes[0];
            $episode_id = $episode->id;
        }
        else 
        {
            foreach($episodes as $temp_episode) {
                if($temp_episode['id'] == $episode_id) {
                    $episode = $temp_episode;
                    break;
                }
            }
        }
        $videos = $episode->videos()->with('connections')->get();
        $root_video = $episode->root_video;
        $connections = $episode->connections;

        return view('editor/index',[
            'root_video' => $root_video,
            'videos' => $videos->keyBy('id'),
            'connections' => $connections,
            'project' => $project,
            'project_id' => $project_id,
            'episodes' => $episodes,
            'episode_id'=> $episode_id
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Episode  $episode
     * @return \Illuminate\Http\Response
     */
    public function edit(Episode $episode)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Episode  $episode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Episode $episode)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Episode  $episode
     * @return \Illuminate\Http\Response
     */
    public function destroy(Episode $episode)
    {
        //
    }
}
