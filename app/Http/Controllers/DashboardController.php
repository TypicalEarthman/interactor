<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $id = Auth::user()->id;
        $projects = Auth::user()->projects;
        return view('dashboard',[
            'projects' => $projects
        ]);
    }
}
