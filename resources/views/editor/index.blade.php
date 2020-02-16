@extends('layouts.app')

@section('content')
<div id="editor-root">
	<div id="settings" class="editor-base-block">
		
	</div>
	<div id="preview">
		<editor-preview
			json_videos=" {{ $videos }} "
			json_connections="{{ $connections }}"
			root_number="{{$root_video}}"
			ref="editor_preview"
		>
		</editor-preview>
	</div>
	<div id="episodes" class="editor-base-block">
		<h3>
			Episodes:
		</h3>
		<button @click="addEpisode"> 
			Add episode
		</button>
		@foreach ($episodes as $episode)
			<div>
				
					<a href="{{ route('episode.show', [
					'project_id' => $project_id,
					'episode_id' => $episode->id
				]) }}">{{ $episode->name }}</a>
				
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
		<button @click="addPage"> 
			Add page
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
		<connection-manager
			json_videos="{{ $videos }}"
			json_connections="{{ $connections }}"
			episode_id="{{$episode_id}}"
			root_number="{{$root_video}}"
			token="{{csrf_token()}}"
			v-on:redraw_connections="redraw_connections">
		>
		</connection-manager>
	</div>
	<div class="dialog" v-show="modal">
		<button @click="modal=false">
			Close dialog
		</button>
		<custom-form 
			:option="option" 
			episode_id="{{$episode_id}}" 
			project_id="{{$project_id}}" 
			:route="route" 
			token="{{csrf_token()}}">
		</custom-form>
	</div>
</div>
@endsection

@section('script')
<script>
mix = {
	data: {
		modal: false,
		@if(env('APP_ALEX'))
			api: 'http://interactor'
		@else
			@if(App::environment('local'))
			api:  'http://127.0.0.1/',
			@else
			api:  'http://interactor.su/',
			@endif
		@endif
		episode_id: '',
		project_id: '',
		option: '',
		route: '',
		editor_preview: null,
	},
	methods: {
		addVideo: function() {
			this.option = 'video';
			this.route = this.api + 'video/store';
			this.modal = true;
		},
		addEpisode: function() {
			this.option = 'episode';
			this.route = this.api + 'episode/create';
			this.modal = true;
		},
		addPage: function() {
			this.option = 'page';
			this.route = '?';
			this.modal = true;
		},
		redraw_connections(connections) {
			this.editor_preview.connections = connections;
		}
	},
	mounted: function() {
		this.editor_preview = this.$refs.editor_preview;
	}
};

</script>
@endsection