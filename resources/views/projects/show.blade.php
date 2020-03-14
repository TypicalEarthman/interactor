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
	<div class="episode-container">
		@foreach ($episodes as $episode)
			{{ $episode->id }}
			<!--
				<div class="episode-block" @click="chooseEpisode('{!! json_encode($episode->id) !!}')" episode_id={{$episode->id}}>
				<span class="episode-name" episode_id={{$episode->id}}>{{ $episode->name }} </span>
				<editor-preview
					:episode="{{$episode}}"
				>
				</editor-preview>
			</div>
		-->
		@endforeach
	</div>
</div>
<script>
if(!window.mix) var mix = {};
const app_vue = new Vue({
	el: '#app',
	mixins: [mix],
	mounted() {
		this.episodes = {!! json_encode($episodes) !!}
		this.current = -1
		console.log(this.episodes)
	},
	data() {
		return {
			episodes: '',
			current: -1
		}
	},
	methods: {
		chooseEpisode: function(choosen_episode) {
			let self = this
			choosen_episode = parseInt(choosen_episode)
			let episode_blocks = document.querySelectorAll(".episode-block")
			let episode_names = document.querySelectorAll(".episode-name")
			episode_names.forEach(function(item) {
				item.style.display = 'none';
			});
			self.current = choosen_episode
			episode_blocks.forEach(function(item) {
				if (parseInt(item.getAttribute('episode_id')) != choosen_episode ) {
					item.style.display = 'none';
				}
				else {
					item.style.display = 'block';
					item.classList.add('espisode_full');
				}
			});

		},
		end_episode: function(episode_id) {
			for(let i = 0; i < this.episodes.length; i++) {
				if(episode_id == this.episodes[i].id) {
					if (i != this.episodes.length -1) {
						this.chooseEpisode(this.episodes[i+1].id);
					}
					else {
						alert("This is the end, we're sorry :(")
					}
				}
			}
		}
	},
});
</script>
</body>
</html>