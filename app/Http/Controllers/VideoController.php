<?php

namespace App\Http\Controllers;

use App\Video;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller

{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = Auth::user()->id;
        $project_id = $request->get('project_id');
        $video = new Video();
        $video->name = $request->get('name');
        $video->project_id = $project_id;
        $video->url = "/storage/users/{$id}/project{$project_id}/{$request->video->getClientOriginalName()}";
        $request->video->storeAs("users/{$id}/project{$project_id}", $request->video->getClientOriginalName());
        $video->save();

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function show(Video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request->id;
        $project_id = $request->project_id;
        $user_id = Auth::user()->id;
        $video = Video::where('id', $id)->first();
        $previous_url = $video->url;
        $previous_url = substr($previous_url, 9);
        Video::where('id', $id)
            ->update([
                'url' => "/storage/users/{$id}/project{$project_id}/{$request->video->getClientOriginalName()}",
                'name' => $request->name
            ]);
        $request->video->storeAs("users/{$user_id}/project{$project_id}", $request->video->getClientOriginalName());
        Storage::delete($previous_url);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        //
    }
}
