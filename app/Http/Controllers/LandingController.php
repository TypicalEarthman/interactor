<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingController extends Controller
{

    
    public function hire()
    {
        return view('landings/hire');
    }
    public function emotional()
    {
        return view('landings/emotional');
    }
}
