<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class VideoUploadController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    protected function store(Request $request) 
    {   
        $id = Auth::user()->id;
        $request->video->storeAs("users/{$id}", $request->video->getClientOriginalName());
        return redirect()->back();
    }
}
