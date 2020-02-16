<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF Token -->
	<!-- It hurts me -->
	<!--
		<meta name="csrf-token" content="{{ csrf_token() }}">
	-->

	<title>asdasdasd</title>

	<!-- Scripts -->
	<script src="{{ asset('js/vendor.js') }}"></script>
	<script src="{{ asset('js/app.js') }}"></script>

	<!-- Styles -->
	<link href="{{ asset('css/vendor.css') }}" rel="stylesheet">
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

<div id="app">
	<editor-preview
		json_videos=" {{ $videos }}"
		json_connections="{{ $connections }}"
		root_number="{{$root_video}}"
		:project_preview="true"
	>
</div>
<script>
if(!window.mix) var mix = {};
const app_vue = new Vue({
	el: '#app',
	mixins: [mix],
	mounted() {
	},
	data : {
	},
	methods: {
	},
});
</script>
</body>
</html>