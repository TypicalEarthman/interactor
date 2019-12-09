<?php

namespace App\Http\Controllers\Custom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function index() {
    	return view('editor.index');
    }
}
