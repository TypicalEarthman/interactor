@extends('layouts.app')

@section('content')
<div id="editor-root" class="row mx-0">
	
	<div id="settings" class="col-md-2 editor-base-block pr-0">
		<div class="ebb-content">
			<h2>Settings:</h2>
			<ol>
				<li>
					Link to your project:<br />
					<a href="{{ route('project.show', [
						"project" => $project_id,
					]) }}" target="_blank">interactor.su/{{ $project->id }}</a>
				</li>
				<li>
					@auth
						Open your dashboard:<br />
						<a href="{{ route('dashboard') }}">Dashboard</a>
					@else
						Register at our service:<br />
						<a href="{{ route('home') }}">Login/Sign up</a>
					@endauth
				</li>
			</ol>
			{{-- project name --}}
		</div>
		
	</div>

	<div id="preview" class="col-md-8 editor-base-block">
		<editor-preview
			:episode="episode"
			ref="editor_preview"
		>
		</editor-preview>
		{{-- 
		<editor-preview
			json_videos=" {{ $videos }} "
			json_connections="{{ $connections }}"
			root_number="{{$root_video}}"
			:project_preview="false"
			ref="editor_preview"
			v-on:change_target_preview="change_target_preview"
		>
		</editor-preview>
		--}}
	</div>
	
	<div id="episodes" class="col-md-2 editor-base-block pl-0">
		<div class="ebb-content">
			<h2>
				Episodes:
			</h2>
			<ol>
			@foreach ($episodes as $episode)
				<li class="mb-3"> 
					
						<a href="{{ route('episode.show', [
						'project_id' => $project_id,
						'episode_id' => $episode->id
					]) }}">{{ $episode->name }}</a>
					
				</li>
			@endforeach
			</ol>

			<button class="btn btn-primary btn-block btn-sm mt-5" @click="addEpisode"> 
				Add episode
			</button>
		</div>
	</div>

	<div id="files" class="col-md-2 editor-base-block pr-0 pt-0">
		<div class="ebb-content">
		<h2>
			Videos:
		</h2>
		<ol>
		@foreach ($videos as $video)
			<li class="mb-3"> 
				<p class="mb-0">Action: {{ $video->name }}</p>
				<p class="mb-0">Filename: {{$video->filename }}</p>
			</li>

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
		@endforeach
		</ol>
		<button class="btn btn-primary btn-block btn-sm mt-5" @click="addVideo" style="position: fixed; left: 30px; bottom: 35px; width: auto;"> 
			Add video
		</button>
		<button class="btn btn-primary btn-block btn-sm mt-5" @click="delete_video = true" style="position: fixed; left: 130px; bottom: 35px; width: auto;"> 
			Delete video
		</button>
		{{-- 
		<button @click="addPage"> 
			Add page
		</button>
		--}}
		</div>
	</div>
	<div id="manager" class="col-md-10 editor-base-block pt-0">
		<div class="ebb-content" style="overflow: hidden; position: relative">
			{{-- 
			<connection-manager
				json_videos="{{ $videos }}"
				json_connections="{{ $connections }}"
				episode_id="{{$episode_id}}"
				root_number="{{$root_video}}"
				token="{{csrf_token()}}"
				ref="manager"
				v-on:change_target="change_target"
				v-on:set_root="set_root"
				v-on:redraw_connections="redraw_connections">
			>
			</connection-manager>
			--}}
		</div>
	</div>
	<transition name="fade">
		<div class="dialog" v-show="delete_video">
            <h2>
                Delete video
            </h2>

            <div class="form-group row">
                <div class="col-md-3">
                    <label class="col-form-label">Video:</label>
                </div>
                <div class="col-md-9">
                    <select v-model="videoDeleteId" class="form-control">
						@foreach ($videos as $video)
							<option v-bind:value="{'id': {{ $video->id }}, 'episode_id':{{$episode_id}}}"> 
								{{ $video->name }}
							</option>
						@endforeach
                    </select>
                </div>
                
            </div>

           <button @click="delete_video=false" class="btn btn-primary btn-block btn-sm" style="position: absolute; left: 20px; bottom: 20px; right: 20px; width: auto">
                Close
            </button>
            
            <button @click="deleteVideo" class="btn btn-primary btn-block btn-sm">
                Delete video
            </button>
		</div>
	</transition>
	<transition name="fade">
		<div class="dialog" v-show="modal">
		{{-- 
			<button @click="modal=false">
				Close dialog
			</button>
			--}}
			{{-- 
			<custom-form 
				:option="option" 
				episode_id="{{$episode_id}}" 
				project_id="{{$project_id}}" 
				:route="route" 
				token="{{csrf_token()}}">
			</custom-form>
			--}}
		</div>
	</transition>

	<transition name="fade">
		<div class="blacker" v-if="modal" @click="modal=false"></div>

	</transition>
	
</div>
@endsection

@section('script')
<script>
mix = {
	data: {
		modal: false,
		@if(env('APP_ALEX'))
			api: 'http://interactor/',
		@else
			@if(App::environment('local'))
			api:  'http://127.0.0.1:8000/',
			@else
			api:  'http://interactor.su/',
			@endif
		@endif
		episode_id: '',
		project_id: '',
		option: '',
		route: '',
		videoDeleteId: '',
		delete_video: false,
		editor_preview: null,
		target_id: '',
		manager: null,
		episode: {
			'videos' : @json($videos),
			{{-- 'connections' : @json($connections), --}}
			'current_video_id' : {{ $root_video }},
			'video_player_ref' : undefined,
		}
	},
	methods: {
		addVideo: function() {
			this.option = 'video';
			this.route = this.api + 'video/store';
			this.modal = true;
		},
		deleteVideo: function() {
            let id = this.videoDeleteId.id;
            let episode_id = this.videoDeleteId.episode_id;
            let self = this;
            axios.post('/video/destroy', {
                'id': id,
                'episode_id': episode_id
            })
            .then(function (response) {
				console.log(response.data);
				alert('Selected video has been deleted');
                self.delete_video = false;
            })
            .catch(function (error) {
                console.log(error);
                self.delete_video = false;
            });
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
		},
		change_target(video) {
			this.editor_preview.src = video.url;
			this.editor_preview.id = video.id;
			this.editor_preview.options = [];
			this.editor_preview.show_options = false;
			this.editor_preview.cover = true;
		},
		set_root(id) {
			this.editor_preview.rootNumber = id;
		},
		change_target_preview(id) {
			this.manager.activeVideo = id ;
		}
	},
	mounted: function() {
		this.editor_preview = this.$refs.editor_preview;
		this.manager = this.$refs.manager;

		this.episode.video_player_ref = this.$refs.editor_preview;
		/*
		setTimeout(() => {
			axios.get('/test.mp4', {
				responseType: 'blob'
				}).then( response => {
					console.log(response);
					let vid = URL.createObjectURL(response.data);
					console.log(vid);
					let _video = document.querySelector("#video")
					_video.src = vid;
				});
		}, 2000);
		*/
	}
};

</script>
@endsection