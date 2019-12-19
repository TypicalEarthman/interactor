@extends('layouts.app')

@section('content')
<div class="container" id="editor-root">
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
			<button @click="createConnection">
				Создать связь
			</button>
			<div v-show="connectionMenu">
				<div v-show="origin">
					От
					<br/>
					<button v-for="item in videos" @click="setOrig(item)">
						@{{ item.children[0]._text }}			
						<br/>
					</button>
				</div>
				<div v-show="!origin">
					До
					<br/>
					<button v-for="item in videos" @click="setDest(item)">
						@{{ item.children[0]._text }}
						<br/>
					</button>
				</div>
			</div>
        </div>
	</div>
</div>
@endsection

@section('script')
<!-- 
	Описание класса Video
	Рендер карточек
	Действия с карточками 
-->
<script src="{{ URL::asset('/js/video.js') }}"></script>
<!-- 
	Не в video.js т.к. используется синатксис laravel
	Скрипт загрузки данных видео в переменную
-->
<script>
let getVideos = function() {
	downloadedVideos = {!! json_encode($videos->toArray()) !!};
};
</script>
<!-- 
	Инициализация PIXI
	Функции запуска скриптов
-->
<script src="{{ URL::asset('/js/start.js') }}"></script>
<script>
mix = {
	data: {
		connectionMenu: false,
		origin: true,
		connectionTemp: {
			origin: '',
			destination: ''
		},
		videos: ''
	},
	methods: {
		createConnection: function() {
			this.videos = videos['rectangles'].slice();
			this.connectionMenu = !this.connectionMenu;
			console.log(videos['rectangles']);
		},
		setOrig: function(item) {
			this.connectionTemp.origin = item;
			this.origin = !this.origin;
			let id = item.id;
			for(let i = 0; i < this.videos.length;i++) {
				if(this.videos[i].id == id){
					this.videos.splice(i, 1);
					break;
				}
			}
		},
		setDest: function(item) {
			this.connectionTemp.destination = item;
			let origin = this.connectionTemp.origin;
			let destination = this.connectionTemp.destination;
			let line = new PIXI.Graphics();
			line.lineStyle(2, 0xFFFFFF, 1);
			let startx = origin.x + origin.width;
			let starty = origin.y +origin.height/2;
			let finishx = destination.x;
			let finishy = destination.y+origin.height/2;
			let cp1x = origin.x + origin.width + (destination.x - origin.x)/4;
			let cp1y = origin.y + (destination.y - origin.y)/4*3;
			let cp2x = origin.x + (destination.x - origin.x)/4*3;
			let cp2y = origin.y + (destination.y - origin.y)/4;
			if(origin.x >= destination.x) {
				cp1x = origin.x + (destination.x - origin.x)/4;
				cp2x = origin.x + origin.width + (destination.x - origin.x)/4*3;
				startx = origin.x;
				finishx = destination.x + origin.width;
			}
			line.moveTo(startx,starty);
			// 1/4 от начала по x, 3/4 от начала по y
			// 3/4 от начала по x, 1/4 от начала по y
			line.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,finishx,finishy);

app.stage.addChild(line);
			this.clearData();
			console.log(this.connectionTemp);
		},
		clearData: function() {
			this.origin = !this.origin;
			this.connectionMenu = false;
			this.videos = '';
			this.connectionTemp = {origin: '', destination: ''};
		}
	},
	mounted: function() {
		console.log('it works');
	}
};

class Connection extends PIXI.Graphics {
	constructor(el1,el2) {
		super();
		// Rectangle styling
		
		this.lineStyle(5, 0xAA0000, 1);

		this.bezierCurveTo(100, 200, 200, 200, 240, 100);
		this.position.x = 300;
		this.position.y = 300;

		app.stage.addChild(bezier);

		this.x = 20;
		this.y = 20;
	}
}
</script>
@endsection