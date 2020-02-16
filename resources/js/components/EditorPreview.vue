<template>
    <div class="preview">
        <video :src="src" controls="controls" id="video" @ended="onEnd">
        </video>
        <div class="chooseOptions">
            <div class="option" v-for="option in options" @click="choose(option)">
                {{ option.name }}
            </div>
        </div>
    </div>
</template>

<style scoped>
video {
    height: 100%;
    width: auto;
}
.preview {
    position: relative;
    height: 48vh;
}
.chooseOptions {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
.option {
    width: 100px;
    height: 50px;
    background: red;
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
                options: Array
            }
        },
        props: {
            json_videos: String,
            root_number: String,
            json_connections: String
        },
        methods: {
            onEnd: function() {
                console.log('Film ended')
                let id = this.id
                let connections = this.connections[id]     
                let options = []   
                let self = this
                connections.forEach(function(item) {
                    options.push(self.videos[item.out_id])
                })
                this.options = options
                console.log(options)
            },
            choose: function(video) {
                this.src = video.url
                this.id = video.id
                this.options = []
            }
        },
        mounted() {
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
        }
    }
</script>
