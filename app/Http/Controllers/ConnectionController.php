<?php

namespace App\Http\Controllers;

use App\Connection;
use Illuminate\Http\Request;
use App\Episode;
use App\Services\ConnectionService;

class ConnectionController extends Controller
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
	public function create(Request $request, ConnectionService $connectionService)
	{
		return $connectionService->store([
			"episode_id" => $request->episode_id,
			"entry_id" => $request->entry_id,
			"out_id" => $request->out_id,
		]);
	}
	public function delete(Request $request, ConnectionService $connectionService)
	{
		return $connectionService->delete([
			"episode_id" => $request->episode_id,
			"connection_id" => $request->connection_id,
		]);
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
	 * @param  \App\Connection  $connection
	 * @return \Illuminate\Http\Response
	 */
	public function show(Connection $connection)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Connection  $connection
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Connection $connection)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Connection  $connection
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Connection $connection)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Connection  $connection
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Connection $connection)
	{
		//
	}
}
