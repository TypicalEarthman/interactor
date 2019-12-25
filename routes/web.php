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
Route::post('/video/edit', 'VideoController@edit')->name('video.edit');
Route::post('/project', 'ProjectController@create')->name('project.create');
Route::post('/episode/create', 'EpisodeController@create')->name('episode.create');
Route::get('/episode/show', 'EpisodeController@show')->name('episode.show');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/preview', 'Custom\EditorController@preview')->name('editor.preview');