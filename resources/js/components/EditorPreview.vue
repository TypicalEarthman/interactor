<template>
    <div class="preview" v-bind:style="{ height: height}">
        <div class="embed-responsive embed-responsive-16by9">
            <video :src="src" id="video" @ended="onEnd" @click="playpause" @timeupdate="onTimeUpdate()" ref="videoElement"
            >
            </video>
            <progress-bar :value="completion">
            </progress-bar>
            <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video" @click="playpause" v-show="cover">
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
                completion: 0
            }
        },
        props: {
            json_videos: String,
            root_number: String,
            json_connections: String,
            project_preview: Boolean
        },
        methods: {
            playpause: function() {
                if(document.querySelector("#video").paused) {
                    document.querySelector("#video").play();
                    this.cover = false
                }
                else {
                    document.querySelector("#video").pause();
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
                console.log('Film ended')
                if(Array.isArray(this.connections)) {
                    this.rebuild()
                }
                let id = this.id
                let connections = this.connections[id]     
                let options = []   
                let self = this
                connections.forEach(function(item) {
                    options.push(self.videos[item.out_id])
                })
                this.options = options
                this.show_options = true
                this.cover = true
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
                this.src = video.url
                this.id = video.id
                this.options = []
                this.show_options = false
                let target = this.id
                this.$emit("change_target_preview", target);
            }
        },
        mounted() {
            if(this.project_preview) {
                this.height = "100vh";
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
        }
    }
</script>
