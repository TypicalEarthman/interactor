<template>
	<div class="preview" v-bind:style="{ height: height}">
		<div class="embed-responsive embed-responsive-16by9" id="video-holder">
			<video-player
				:source="src"
				v-on:end_video="end_video"
				ref="videoPlayer"
				:episode="episode"
			>
			</video-player>
		</div>
		<div class="chooseOptions row" v-show="show_options">
			<div class="col-md-6 option p-3" v-for="option in episode.videos[episode.current_video_id].connections" @click="choose(option)">
				<div class="option-background">
					{{ option.name }}
				</div>
				
			</div>
		</div>
	</div>
</template>

<style scoped>
.preview {
	position: relative;
	height: 100%;
}
.chooseOptions {
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	display: flex;
	flex-flow: row wrap;
	z-index: 500;
	justify-content: space-around;
	height: 100%;
	z-index: 1000;
}
.option {
	position: relative;
}

.option-background {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background: rgba(155,0,0,0.7);
	cursor: pointer;
	border-radius: 10px;
	transition: background .3s, transform .3s;
}

.option-background:hover {
	transform: scale(1.05);
	background: rgba(155,0,0,0.8);
}
</style>

<script>
	export default {
		mounted() {
            console.log(this.episode)
            let self = this
			self.src = self.episode.videos[self.episode.current_video_id].url_horizontal
			let video = self.episode.video_player_ref
            window.addEventListener("orientationchange", function () {
				video.pause()
				let time = video.currentTime
				let set_time = function() {
					video.play()
					console.log(time)
					video.currentTime = time
					console.log(video.currentTime)
					video.removeEventListener('canplaythrough',set_time,false)
				}
                if (screen.orientation.angle == 90) {
					self.src = self.episode.videos[self.episode.current_video_id].url_horizontal
					video.addEventListener('canplaythrough',set_time,false)
					self.episode.horiz = true
                } else {
                    self.src = self.episode.videos[self.episode.current_video_id].url_vertical
					video.addEventListener('canplaythrough',set_time,false)
					self.episode.horiz = false
                }
            })
		},
		data () {
			return {
				height: "48vh%",
                show_options: false,
				src: ''
			}
		},
		props: {
			project_preview: {
				type: Boolean,
				default() {
					return false;
				}
			},
			episode: Object,
		},
		computed: {
			options() {
				let options = [];

				let connections = this.episode.videos[this.episode.current_video_id].connections;

                let self = this

				if(connections) {
					console.log(connections)
					connections.forEach(function(item) {
                        options.push(self.episode.videos[item.out_id])
                               
                        axios.get(self.episode.videos[item.out_id].url_horizontal, {
                            responseType: 'blob'
                        }).then( response => {
                            let source = URL.createObjectURL(response.data);
                            self.episode.videos[item.out_id].url_horizontal = source;
                        });
					})
				}
				return options;
			}
			
		},
		methods: {
            preload_videos: function() {
                this.options.forEach(function(item) {
                    axios.get(item.url_horizontal, {
                        responseType: 'blob'
                    }).then( response => {
                        let source = URL.createObjectURL(response.data);
                        item.url_horizontal = source;
                        console.log(item.url_horizontal)
                    });
                    axios.get(item.url_vertical, {
                        responseType: 'blob'
                    }).then( response => {
                        let source = URL.createObjectURL(response.data);
                        item.url_vertical = source;
                        console.log(item.url_vertical)
                    });
                })
            },
			end_video: function(id) {
				this.show_options = true
			},
			choose: function(video) {
				this.episode.current_video_id = video.id
				if (this.episode.horiz = true) {
					this.src = this.episode.videos[this.current_video_id].url_horizontal
				} else {
					this.src = this.episode.videos[this.current_video_id].url_vertical
				}
			}
		},
		watch: {
		},
		beforeMount() {
			if(this.project_preview) {
				this.height = "100vh%"
			}
		}
	}
</script>
