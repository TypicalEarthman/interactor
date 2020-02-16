<?php

namespace App\Services;

use App\Connection;
use App\Episode;
use Auth;
use Illuminate\Http\Request;

class ConnectionService {
	public function store($data) {
		$connection = new Connection();
        $connection->episode_id = $data('episode_id');
        $connection->entry_id = $data('entry_id');
        $connection->out_id = $data('out_id');
        $connection->meta = '{}';
        $connection->save();
        
        return Episode::find($data('episode_id'))->connections; 
	}
	
}
?>