<template>
    <div class="root_video_component">
        <video :src="source" id="video" @ended="onEnd" @click="playpause" @timeupdate="onTimeUpdate()" ref="videoElement" preload="auto" muted autoplay
        >
        </video>
        <progress-bar :value="completion">
        </progress-bar>
        <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video" @click="playpause" v-show="cover" ref="svg">
            <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>
            <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>
        </svg>
    </div>
</template>
<style scoped>
    video {
        height: 100%;
        width: auto;
        max-width: 100%;
    }
</style>
<script>
    export default {
        data () {
            return {
                completion: 0,
                cover: false
            }
        },
        props: {
            source: String,
            id: Number,
			episode: Object,
            first: Boolean
        },
        methods: {
            playpause: function(event) {
                if(this.$refs.videoElement.paused) {
                    this.$refs.videoElement.play()
                    this.cover = false
                }
                else {
                    this.$refs.videoElement.pause()
                    this.cover = true
                }
            },
            onTimeUpdate: function() {
                let video = this.$refs.videoElement
                if(!isNaN(video.duration)) {
                    let percent_complete = video.currentTime / video.duration
                    this.completion = percent_complete
                }
            },
            onEnd: function() {
                console.log('Video end')
                this.$emit("end_video")
                //this.$emit("end_video", this.id)
            }
        },
        mounted() {
            this.episode.video_player_ref = this.$refs.videoElement
        }
    }
</script>
