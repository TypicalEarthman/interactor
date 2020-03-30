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
Route::view('/test', 'test');

Route::get('/', 'ProjectController@generate')->name('main');
Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/hire',  'LandingController@hire')->name('landing.hire');
Route::get('/emotional',  'LandingController@emotional')->name('landing.emotional');
Route::get('/dashboard',  'DashboardController@index')->name('dashboard');
Route::post('/video/store', 'VideoController@store')->name('video.store');
Route::post('/video/update', 'VideoController@update')->name('video.update');
Route::post('/video/destroy', 'VideoController@destroy')->name('video.destroy');
Route::post('/video/edit', 'VideoController@edit')->name('video.edit');

Route::post('/project', 'ProjectController@create')->name('project.create');
Route::get('/{project}', 'ProjectController@show')->name('project.show');

Route::post('/episode/create', 'EpisodeController@create')->name('episode.create');
Route::get('/episode/show/{project_id}/{episode_id}', 'EpisodeController@show')->name('episode.show');

Route::get('/episode/view/{project_id}/{episode_id}', 'EpisodeController@view')->name('episode.view');

Route::post('/episode/setroot','EpisodeController@set_root');




Route::post('/connection/add','ConnectionController@create');
Route::post('/connection/delete','ConnectionController@delete');
Route::get('/preview', 'Custom\EditorController@preview')->name('editor.preview');

