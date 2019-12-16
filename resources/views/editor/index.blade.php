@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
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
                        <input type="submit" value="Upload video" />
                    </form>
				</div>
			</div>
            <div class="card">
				<div class="card-header">Dashboard</div>
				<a href='{{ url("preview?project={$project_id}") }}'>Preview</a>
			</div>
			<div class="card">
				<div class="card-header">Videos</div>

				<div class="card-body">
					@if (session('status'))
						<div class="alert alert-success" role="alert">
							{{ session('status') }}
						</div>
					@endif
					

					@foreach ($videos as $video)
						<div>
							<h2> {{ $video->name }} </h2>
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
						</div>
					@endforeach
				</div>
			</div>
        </div>
    </div>
</div>
@endsection

@section('script')
<script>

const app = new PIXI.Application({
	backgroundColor: 0x1099bb
});
const loader = PIXI.Loader.shared;
let container = new PIXI.ParticleContainer(10000, {
	scale: true,
	position: true,
	rotation: true,
});

class Video extends PIXI.Graphics {
	constructor(x,y,el) {
		super();
		// Rectangle styling
		this.beginFill(0xC27261);
		this.drawRect(0, 0, 256, 144);
		this.endFill();

		// Add text to rectangle
		let videoName = new PIXI.Text(el.name);
		this.addChild(videoName);

		//Dragging
		 this.interactive = true;
		 this
			.on('pointerdown', this.onDragStart)
			.on('pointerup', this.onDragEnd)
			.on('pointerupoutside', this.onDragEnd)
			.on('pointermove', this.onDragMove);

		// Rectangle positioning
		this.x = x;
		this.y = y;
	}
	onDragStart(event) {
		this.data = event.data;
		this.alpha = 0.5;
		this.dragging = true;
	}
	onDragEnd() {
		this.alpha = 1;
		this.dragging = false;
		// Set the interaction data to null
		this.data = null;
	}

	onDragMove() {
		if (this.dragging) {
			const newPosition = this.data.getLocalPosition(this.parent);
			// Set pointer on center
			this.x = newPosition.x - 128;
			this.y = newPosition.y -72;
		}
	}
}
let pixi = {
	methods: {
		createVideo: function(i,el) {
			let rectangle = new Video(pixi.videos['last_x'],pixi.videos['last_y'],el);
			pixi.videos['last_x'] += 0;
			pixi.videos['last_y'] += 170;
			pixi.videos['rectangles'].push(rectangle);
			app.stage.addChild(pixi.videos['rectangles'][i]);
		},
		startProcess: function() {
			app.stage.addChild(container);
			app.renderer.view.style.position = "absolute";
			app.renderer.view.style.display = "block";
			app.renderer.autoResize = true;
			app.renderer.resize(window.innerWidth, window.innerHeight);

			document.body.appendChild(app.view);
			this.getVideos();
			this.renderVideos(pixi.videosDownloaded);
		},
		getVideos: function() {
			pixi.videosDownloaded = {!! json_encode($videos->toArray()) !!};
		},
		renderVideos: function (videos) {
			pixi.videos['last_x'] = 0;
			pixi.videos['last_y'] = 0;
			pixi.videos['rectangles'] = [];
			for(let i = 0; i < videos.length; i++) {
				this.createVideo(i,videos[i]);
			}
		}
	},
	videosDownloaded: Array,
	videos: Object
}
pixi.methods.startProcess();

</script>
@endsection