<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF Token -->
	<!-- It hurts me -->
	<!--
		<meta name="csrf-token" content="{{ csrf_token() }}">
	-->

	<title>Preview</title>

	<!-- Scripts -->
	<script src="{{ asset('js/vendor.js') }}"></script>
	<script src="{{ asset('js/app.js') }}"></script>

	<!-- Styles -->
	<link href="{{ asset('css/vendor.css') }}" rel="stylesheet">
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

<div id="app">
	<div id="preview" class="col-md-8 editor-base-block">
		<editor-preview
			:episode="episode"
		>
		</editor-preview>
	</div>
</div>
<script>
if(!window.mix) var mix = {};
const app_vue = new Vue({
    el: '#app',
    mixins: [mix],
    data() {
        return {
            @if(env('APP_ALEX'))
                api: 'http://interactor/',
            @else
                @if(App::environment('local'))
                api:  'http://127.0.0.1:8000/',
                @else
                api:  'http://interactor.su/',
                @endif
            @endif
            option: '',
            route: '',
            videoDeleteId: '',
            delete_video: false,
            target_id: '',
            manager: null,
            episode: {
                'videos' : @json($videos),
                'horiz': true,
                {{-- 'connections' : @json($connections), --}}
                'current_video_id' : {{ $root_video }},
                'video_player_ref' : undefined
            }
        }
    }
});

</script>
</body>
</html>