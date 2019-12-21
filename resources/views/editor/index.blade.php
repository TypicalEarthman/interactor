@extends('layouts.app')

@section('content')
<div id="editor-root">
	<div id="settings" class="editor-base-block">
		
	</div>
	<div id="preview">
		
	</div>
	<div id="episodes" class="editor-base-block">
		<h3>
			Episodes:
		</h3>
		@foreach ($episodes as $episode)
			<div>
				<p> {{ $episode->name }}</p>
				<button @click="addEpisode"> 
					Add episode
				</button>
				
			</div>
		@endforeach
		
	</div>
	<div id="files" class="editor-base-block">
		<h3>
			Assets:
		</h3>
		<button @click="addVideo"> 
			Add video
		</button>
		@foreach ($videos as $video)
			<div>
				<p> {{ $video->name }} ({{$video->filename }}) </p>
				<!--
					
					<video src="{{ asset("{$video->url}") }}" width="400" controls="controls">
					</video>
					<form method="POST" action="{{ route('video.update') }}" method="POST" enctype="multipart/form-data">
						@csrf
						Заменить видео
						<br />
						New name:
						<br /><br />
						<input type="text" name="name" />
						<br /><br />
						<input type="file" name="video" />
						<br /><br />
						<button type="submit" class="btn btn-sm btn-default">Обновить</button>
						<input type="hidden" name="id" value="{{$video->id}}" />
						<input type="hidden" name="project_id" value="{{$project_id}}" />
					</form>
				-->
				
			</div>
		@endforeach
		
	</div>
	<div id="manager">
		<canvas id="editor-timeline">
		</canvas>
	</div>
	<div class="dialog" v-show="modal">
		<button @click="modal=false">
			Close dialog
		</button>
		<form action="{{ route('video.store') }}" method="POST" enctype="multipart/form-data">
			@csrf
			Name:
			<br />
			<input type="text" name="name" />
			<br /><br />
			File
			<br />
			<input type="file" name="video" />
			<br /><br />
			<input type="hidden" name="project_id" value="{{$project_id}}"/>
			<input type="hidden" name="episode_id" value="{{$episode_id}}"/>
			<input type="submit" value="Upload video" />
		</form>
	</div>
</div>
@endsection

@section('script')
<script>
mix = {
	data: {
		modal: false
	},
	methods: {
		addVideo: function() {
			this.modal = true;
			console.log(this.modal);
		}
	},
	mounted: function() {
		console.log('it works');
	}
};

</script>
@endsection