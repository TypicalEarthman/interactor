<template>
<<<<<<< HEAD
	<div class="preview" v-bind:style="{ height: height}">
		<div class="embed-responsive embed-responsive-16by9" id="video-holder">
			<video-player
				:source="episode.videos[episode.current_video_id].url"
				v-on:end_video="end_video"
				ref="videoPlayer"
			>
			</video-player>

			<!--
			<video-player
				:source="src"
				:id="rootNumber"
				:class="rootClass"
				v-on:end_video="end_video"
				:first="true"
			>
			</video-player>
			<video-player
				v-for="option in options"
				:source="option.url"
				:id="option.id"
				:class="option.class"
				v-on:end_video="end_video"
			>
			</video-player>
		-->
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
.active {
	position: static;
}
.non-active {
	position: absolute;
	left: -9000px;
}
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
<<<<<<< HEAD
	export default {
		mounted() {
			console.log(this.episode)
		},
		data () {
			return {
				/*
				src: String,
				videos: Object,
				connections: Object,
				//rootNumber: Number,
				id: Number,
				// options: Array, // ОТРЕФАКТОРЕНО В COMPUTED.OPTIONS
				rootClass: 'active'
				scaled: false,
				*/
				height: "48vh%",
				show_options: false,
			}
		},
		props: {
			/*
			json_videos: String,
			root_number: String,
			json_connections: String,
			episode_id: Number,
			*/
			project_preview: {
				type: Boolean,
				default() {
					return false;
				}
			},
			episode: Object,
		},
		computed: {
			/*
			options() {
				let options = [];

				let connections = this.episode.videos[this.episode.current_video_id].connections;

				if(connections) {
					console.log(connections)
					//options.push()
				}

				return options;
			}
			*/
		},
		methods: {
			end_video: function(id) {
				this.show_options = true
			},
			set_next_options: function(id) {
				// # ОТРЕФАКТОРЕНО В COMPUTED.OPTIONS

				/*
				if(Array.isArray(this.connections)) {
					this.rebuild()
				}
				let connections = this.connections[id]     
				let options = []   
				let self = this
				if(connections != undefined) {
					connections.forEach(function(item) {
						self.videos[item.out_id].class = 'non-active'
						options.push(self.videos[item.out_id])
						console.log(self.videos[item.out_id])
					})
					this.options = options
				}
				*/
			},
			rebuild: function() {
				/*
				let connections = {}
				this.connections.forEach(function(item) {
					let id = item.entry_id
					if (connections.hasOwnProperty(item.entry_id)) {
					connections[item.entry_id].push(item)
					}
					else {
						let layer = []
						layer.push(item)
						connections[item.entry_id] = layer
					}
				})
				this.connections = connections
				*/
			},
			choose: function(video) {
				this.episode.current_video_id = video.id;
				/*
				this.rootClass = 'non-active'
				this.options.forEach(function(item) {
					if(item.id == video.id) {
						item.class = 'active'
					}
				})
				this.id = video.id
				this.options = []
				this.show_options = false
				let target = this.id
				this.$emit("change_target_preview", target)
				this.set_next_options(this.id)
				*/
			}
		},
		watch: {
			/*
			rootNumber: function(id) {
				if (id) {
					this.id = this.rootNumber
					this.src = this.videos[this.rootNumber].url
					this.show_options = false
					this.set_next_options(this.id)
					this.cover = false
					this.completion = 0
				}
			}
			*/
		},
		beforeMount() {
			if(this.project_preview) {
				this.height = "100vh%";
			}
			//console.log(this.episode)
			/*
			this.videos = JSON.parse(this.json_videos)
			this.connections = JSON.parse(this.json_connections)
			this.rootNumber = parseInt(this.root_number)
			this.id = this.rootNumber
			let videos = {}
			this.videos.forEach(function(item) {
				let id = item.id;
				videos[id] = item;
			})
			this.videos = videos
			this.src = this.videos[this.rootNumber].url
			this.rebuild()
			*/
		}
	}
=======
    export default {
        data () {
            return {
                src: String,
                videos: Object,
                connections: Object,
                rootNumber: Number,
                id: Number,
                options: Array,
                height: "48vh%",
                show_options: false,
                scaled: false,
                rootClass: 'active'
            }
        },
        props: {
            json_videos: String,
            root_number: String,
            json_connections: String,
            project_preview: Boolean,
            episode_id: Number
        },
        methods: {
            end_video: function(id) {
                this.show_options = true
            },
            preload_videos: function() {
                this.options.forEach(function(item) {
                    axios.get(item.url_horizontal, {
                        responseType: 'blob'
                    }).then( response => {
                        let source = URL.createObjectURL(response.data);
                        item.url_horizontal = source;
                        console.log(item.url_horizontal)
                    });
                })
            },
            set_next_options: function(id) {
                if(Array.isArray(this.connections)) {
                    this.rebuild()
                }
                let connections = this.connections[id]     
                let options = []   
                let self = this
                if(connections != undefined) {
                    connections.forEach(function(item) {
                        self.videos[item.out_id].class = 'non-active'
                        options.push(self.videos[item.out_id])
                    })
                    this.options = options
                }
                this.preload_videos()
            },
            rebuild: function() {
                let connections = {}
                this.connections.forEach(function(item) {
                    let id = item.entry_id
                    if (connections.hasOwnProperty(item.entry_id)) {
                    connections[item.entry_id].push(item)
                    }
                    else {
                        let layer = []
                        layer.push(item)
                        connections[item.entry_id] = layer
                    }
                })
                this.connections = connections

            },
            choose: function(video) {
                this.src = video.url_horizontal
                this.id = video.id
                this.options = []
                this.show_options = false
                let target = this.id
                this.$emit("change_target_preview", target)
                this.set_next_options(this.id)
            }
        },
        watch: {
            rootNumber: function(id) {
                if (id) {
                    this.id = this.rootNumber
                    this.src = this.videos[this.rootNumber].url_horizontal
                    this.show_options = false
                    this.set_next_options(this.id)
                    this.cover = false
                    this.completion = 0
                }
            }
        },
        beforeMount() {
            if(this.project_preview) {
                this.height = "100vh%";
            }
            this.videos = JSON.parse(this.json_videos)
            this.connections = JSON.parse(this.json_connections)
            this.rootNumber = parseInt(this.root_number)
            this.id = this.rootNumber
            let videos = {}
            this.videos.forEach(function(item) {
                let id = item.id;
                videos[id] = item;
            })
            this.videos = videos
            this.src = this.videos[this.rootNumber].url_horizontal
            this.rebuild()
        },
        mounted() {
            let self = this
            window.addEventListener("orientationchange", function() {
                if( screen.orientation.angle == 90) {
                    self.src = self.videos[self.rootNumber].url_horizontal
                    console.log(self.src)
                }
                else {
                    self.src = self.videos[self.rootNumber].url_vertical
                    console.log(self.src)
                }
            });

        }
    }
>>>>>>> 6d614cf1115e55b54fa7ddfcd175bd420d191b5d
</script>
