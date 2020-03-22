<template>
    <div class="root_video_component">
        <video :src="source" id="video" @ended="onEnd" @click="playpause" @timeupdate="onTimeUpdate()" ref="videoElement" preload="auto"
        >
        </video>
        <progress-bar :value="completion">
        </progress-bar>
        <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video" @click="playpause" v-show="episode.cover" ref="svg">
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
            }
        },
        props: {
            source: String,
            id: Number,
			episode: Object,
            first: Boolean,
            vertical: Boolean
        },
        watch: {
            source: function (val) {
                this.episode.video_horiz_ref.play()
                if(this.episode.videos[this.episode.current_video_id].url_vertical != null) {
                    console.log('vert play')
                    this.episode.video_vert_ref.play()
                }
                if(this.vertical) {
                    this.episode.video_vert_ref = this.$refs.videoElement
                }
                else {
                    this.episode.video_horiz_ref = this.$refs.videoElement
                }
            }
        },
        methods: {
            playpause: function(event) {
                console.log('click')
                if(this.episode.video_horiz_ref.paused) {
                    this.episode.video_horiz_ref.play()
                    if(this.episode.videos[this.episode.current_video_id].url_vertical != null) {
                        console.log('vert play')
                        this.episode.video_vert_ref.play()
                    }
                    this.episode.cover = false
                }
                else {
                    this.episode.video_horiz_ref.pause()
                    console.log('paused')
                    console.log(this.episode.video_horiz_ref)
                    if(this.episode.videos[this.episode.current_video_id].url_vertical != null) {
                        console.log('vert play')
                        this.episode.video_vert_ref.pause()
                    }
                    this.episode.cover = true
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
                console.log(this.vertical)
                console.log('Video end')
                
                if(this.vertical) {
                    if(this.episode.videos[this.episode.current_video_id].url_vertical != null) {
                        this.$emit("end_video")
                    }
                }
                else {
                    this.$emit("end_video")
                }
            }
        },
        mounted() {
            if(this.vertical) {
                this.episode.video_vert_ref = this.$refs.videoElement
            }
            else {
                this.episode.video_horiz_ref = this.$refs.videoElement
            }
        }
    }
</script>
