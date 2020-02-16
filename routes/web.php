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

use App\Project;

Route::get('/', 'ProjectController@generate')->name('main');

Auth::routes();

Route::post('/video/store', 'VideoController@store')->name('video.store');
Route::post('/video/update', 'VideoController@update')->name('video.update');
Route::post('/video/edit', 'VideoController@edit')->name('video.edit');

Route::post('/project', 'ProjectController@create')->name('project.create');
Route::get('/{project}', 'ProjectController@show')->name('project.show');

Route::post('/episode/create', 'EpisodeController@create')->name('episode.create');
Route::get('/episode/show/{project_id}/{episode_id}', 'EpisodeController@show')->name('episode.show');
Route::post('/episode/setroot','EpisodeController@set_root');




Route::post('/connection/add','ConnectionController@create');
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/preview', 'Custom\EditorController@preview')->name('editor.preview');

