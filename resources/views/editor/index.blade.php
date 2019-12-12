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
	/*
	const app = new PIXI.Application();
	const loader = PIXI.Loader.shared;
	let sprites = {};
	let container = new PIXI.ParticleContainer(10000, {
		scale: true,
    	position: true,
    	rotation: true,
    });
    app.stage.addChild(container);

    let kerels = [];

	app.renderer.view.style.position = "absolute";
	app.renderer.view.style.display = "block";
	app.renderer.autoResize = true;
	app.renderer.resize(window.innerWidth, window.innerHeight);

	document.body.appendChild(app.view);

	

	loader.add("kerel","images/kerel.png").load((loader,resources) => {

		app.stage.interactive = true;
		app.stage.on("mousemove", (e) => {
			let kerel = new PIXI.Sprite(resources.kerel.texture);
			kerel.scale.set(Math.random() - 0.5);

			kerel.position.copyFrom(e.data.global);

			kerel.rotation = Math.random();
			kerel.anchor.set(0.5);
			container.addChild(kerel);
			kerels.push(kerel);
		});

		app.ticker.add(delta => {
			for(let i = 0; i < kerels.length; i++) {
				let kerel = kerels[i];
				kerel.rotation -= 0.01;
				kerel.position.y += 1;
				kerel.scale.x += 0.003;
				kerel.scale.y += 0.003;
				
			}
		});
	});

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	*/
</script>
@endsection