<template>
    <div class="preview" v-bind:style="{ height: height}">
        <div class="embed-responsive embed-responsive-16by9">
            <video :src="src" id="video" @ended="onEnd" @click="playpause" @timeupdate="onTimeUpdate()" ref="videoElement"
            >
            </video>
            <progress-bar :value="completion">
            </progress-bar>
            <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video" @click="playpause" v-show="cover" ref="svg">
                <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>
                <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>
            </svg>
        </div>
        <div class="chooseOptions row" v-if="show_options">
            <div class="col-md-6 option p-3" v-for="option in options" @click="choose(option)">
                <div class="option-background">
                    {{ option.name }}
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
video {
    height: 100%;
    width: auto;
    max-width: 100%;
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
                cover: true,
                show_options: false,
                completion: 0,
                scaled: false,
                queue: ''
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
            preload_videos: function(options) {
                // create queue
                this.queue = new createjs.LoadQueue();
                let videosTarget = null;
                let files = [];
                options.forEach(function(item) {
                    let object = {
                        id: item.name,
                        src: item.url,
                        type: createjs.AbstractLoader.BINARY
                    }
                    files.push(object)
                })
                
                // create manifest for files to load
                this.queue.loadManifest(files);

                // handle  & show progress
                let self = this
                this.queue.on("progress", function(evt){
                    let p = self.queue.progress * 100;
                    console.log(" "+Math.round(p)+"%");
                });

            },
            set_next_options: function(id) {
                console.log('Video end')
                if(Array.isArray(this.connections)) {
                    this.rebuild()
                }
                let connections = this.connections[id]     
                let options = []   
                let self = this
                if(connections != undefined) {
                    connections.forEach(function(item) {
                        options.push(self.videos[item.out_id])
                    })
                    this.options = options
                }
                this.preload_videos(this.options)

            },
            playpause: function(event) {
                if(this.$refs.videoElement.paused) {
                    this.$refs.videoElement.play();
                    this.cover = false
                }
                else {
                    this.$refs.videoElement.pause();
                    this.cover = true
                }
            },
            onTimeUpdate: function() {
                let video = this.$refs.videoElement
                if(!isNaN(video.duration)) {
                    let percent_complete = video.currentTime / video.duration;
                    this.completion = percent_complete
                }
            },
            onEnd: function() {
                console.log('Video end')
                if(this.connections[this.id] != undefined) {
                    this.show_options = true
                    this.cover = true
                }
                else {
                    if(this.project_preview) {   
                        self.$emit("end_episode", self.episode_id);
                    }
                }
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
                let videoTarget = this.queue.getResult(video.name);
                let blob = new Blob( [ videoTarget ], { type: "video/mp4" } );
                let urlCreator = window.URL || window.webkitURL;
                let objUrl = urlCreator.createObjectURL( blob );
                console.log(video)
                this.src = objUrl
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
                    this.src = this.videos[this.rootNumber].url
                    this.show_options = false
                    this.set_next_options(this.id)
                    this.cover = true
                    this.completion = 0
                }
            }
        },
        mounted() {
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
            this.src = this.videos[this.rootNumber].url

            this.rebuild()
            this.set_next_options(this.id)
        }
    }
</script>
