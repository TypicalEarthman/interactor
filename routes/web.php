<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::post('/video/store', 'VideoController@store')->name('video.store');
Route::post('/video/update', 'VideoController@update')->name('video.update');
Route::post('/project', 'ProjectController@create')->name('project.create');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/editor', 'Custom\EditorController@index')->name('editor.index');
Route::get('/preview', 'Custom\EditorController@preview')->name('editor.preview');