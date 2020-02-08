<template>
    <div class="container">
        <div class="row justify-content-center">
            <video :src="src" width="600" controls="controls" id="video" @ended="onEnd">
            </video>
        </div>
    </div>
</template>

<script>
    export default {
        
        data () {
            return {
                src: String,
                videosList: Array,
                counter: 0,
                maxVideos: Number
            }
        },
        props: {
            videos: String
        },
        methods: {
            onEnd: function() {
                if(this.counter <= this.maxVideos) {
                    this.counter+=1
                    this.src = this.videosList[this.counter].url
                }
                else {
                    console.log('Film ended')
                }

            }
        },
        mounted() {
            this.videosList = JSON.parse(this.videos)
            this.maxVideos = this.videosList.length
            this.src = this.videosList[0].url
        }
    }
</script>
