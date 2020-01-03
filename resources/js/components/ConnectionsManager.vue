<template>
    <div id="manager-root">
        <div class="controls">
            <button @click="modal=true">
                Add connection
            </button>
            <button @click="root=true">
                Set root
            </button>
        </div>
        <div class="dialog" v-show="root">
            <button @click="root=false">
                Close dialog
            </button>
            <h2>
                Set root
            </h2>
            From: 
            <select v-model="chosenRoot">
                <option v-bind:value="index" v-for="(video,index) in videos">
                    {{ video.name }} ({{video.filename}})
                </option>
            </select>
            <br/>
            <button @click="setRoot">
                Set root
            </button>
        </div>  
        <div class="dialog" v-show="modal">
            <button @click="modal=false">
                Close dialog
            </button>
            <h2>
                Connection
            </h2>
            From: 
            <select v-model="origin">
                <option v-bind:value="index" v-for="(video,index) in videos">
                    {{ video.name }} ({{video.filename}})
                </option>
            </select>
            <br/>
            To: 
            <select v-model="destination">
                <option v-bind:value="index" v-for="(video,index) in videos">
                    {{ video.name }} ({{video.filename}})
                </option>
            </select>
            <button @click="createConnection">
                Add connection
            </button>
        </div>
        <div 
            class="video"
            v-for="video in unPicked"
        >
            {{ video.name }}
        </div>
    </div>
</template>
<style scoped>
#manager-root {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-content: flex-start;
}
.controls {
    position: fixed;
    bottom: 1vh;
    left: 50%;
    height: 20px;
    width: 300px;
    border: 1px solid #000;
}
.video {
    background: #f00;
    width: 100px;
    height: 50px;
    margin-bottom: 20px;
    margin-right: 20px;
}
</style>
<script>
export default {
    data () {
        return {
            videos: Object,
            modal: false,
            unPicked: '',
            origin: '',
            destination: '',
            connections: Object,
            connected: '',
            root: false,
            chosenRoot: ''
        }
    },
    props: {
        json_videos: String,
        episode_id: '',
        token: String,
        json_connections: String
    },
    methods: {
        createConnection: function() {
            let self = this;
            let origin = this.videos[this.origin].id;
            let destination = this.videos[this.destination].id;
            axios.post('/connection/add', {
                'entry_id': origin,
                'out_id': destination,
                'episode_id': parseInt(self.episode_id)
            })
            .then(function (response) {
                console.log(response.data);
                self.modal = false;
            })
            .catch(function (error) {
                console.log(error);
                self.modal = false;
            });
        },
        setRoot: function() {
            let id = this.videos[this.chosenRoot].id;
            let self = this;
            axios.post('/episode/setroot', {
                'id': id,
                'episode_id': parseInt(self.episode_id)
            })
            .then(function (response) {
                console.log(response.data);
                self.root = false;
            })
            .catch(function (error) {
                console.log(error);
                self.root = false;
            });
        }
    },
    mounted() {
        this.videos = JSON.parse(this.json_videos);
        this.connections = JSON.parse(this.json_connections);
        this.unPicked = this.videos;
        console.log(this.videos);
        console.log(this.connections);
    }
}
</script>
