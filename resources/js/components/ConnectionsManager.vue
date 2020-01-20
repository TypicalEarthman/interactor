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
        <div class="parent">
            <canvas id="canvas" width="900" height="330">
            </canvas>
            <!--
            <div
                class="layer"
                v-for="layer in this.meta.connections"
            >
                <div 
                    class="video"
                    v-for="video in layer"
                >
                    {{ video.name }}
                </div>
            </div>
            -->
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
.parent {
    display: flex;
    flex-flow: row;
}
.layer {
    display: flex;
    flex-flow: column;
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
            chosenRoot: '',
            rootNumber: Number,
            meta: '',
            rectangles: {}
        }
    },
    props: {
        json_videos: String,
        episode_id: '',
        token: String,
        json_connections: String,
        root_number: String
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
                self.connections = response.data;
                self.modal = false;
                self.drawConnections();
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
        },
        drawConnections: function() {
            let self = this;  
            let canvas = document.getElementById("canvas");
            this.meta.videos[this.rootNumber].layer = 1;
            let recursiveSetLayer = function(item) {
                if(self.meta.videos[item.entry_id].hasOwnProperty('layer')) {
                    return self.meta.videos[item.entry_id].layer + 1
                }
                else {
                    return recursiveSetLayer(self.meta.videos[item.entry_id])
                }
            };
            this.connections.forEach(function(item){
                if (self.unPicked.hasOwnProperty(item.out_id)) {
                    delete self.unPicked[item.out_id];
                }
                self.meta.videos[item.out_id].layer = recursiveSetLayer(item);
            });
            this.meta.connections = [
                this.unPicked
            ];
            let maxLayer = 0;
            for(let item in this.meta.videos){
                
                if(this.meta.videos[item].layer > maxLayer) {
                    maxLayer = this.meta.videos[item].layer;
                }
            };
            let x = 0;
            for(let i = 1; i <= maxLayer; i++){
                x = (i-1)*150 + 10;
                let currentLayer = [];
                let y = 0;
                let count = 0;
                for(let item in this.meta.videos) {
                    if(this.meta.videos[item].layer == i) {
                        y=count*100 + 10;
                        count++;

                        let rectangle = canvas.getContext("2d");
                        rectangle.fillStyle = "red";
                        rectangle.fillRect(x, y, 100, 60);
                        rectangle.fillStyle = "white";
                        rectangle.fillText(this.meta.videos[item].name, x+10, y+10);

                        this.rectangles[this.meta.videos[item].id] = {
                            x: x,
                            y: y
                        };
                        currentLayer.push(this.meta.videos[item]);
                    }          
                }
                this.meta.connections.push(currentLayer);
                currentLayer = [];
            };
            console.log(this.meta);
            console.log(this.rectangles);
            this.connections.forEach(function(item) {
                let context = canvas.getContext('2d');
                let origin = self.rectangles[item.entry_id];
                let destination = self.rectangles[item.out_id];
                // Reset the current path
                context.beginPath(); 
                // Staring point (10,45)
                context.moveTo(origin.x + 100,origin.y + 30);
                // End point (180,47)
                context.lineTo(destination.x,destination.y+30);
                // Make the line visible
                context.stroke();

            });
            console.log(this.connections);
        }
    },
    mounted() {
        this.videos = JSON.parse(this.json_videos);
        this.connections = JSON.parse(this.json_connections);
        this.rootNumber = parseInt(this.root_number);
        console.log(this.rootNumber);
        let videos = {};
        this.videos.forEach(function(item) {
            let id = item.id;
            videos[id] = item;
        });
        this.meta = {
            videos: videos
        };
        this.unPicked = JSON.parse(JSON.stringify(this.meta.videos));
        if (this.rootNumber != 0) {
            delete this.unPicked[this.rootNumber];
        }
        this.drawConnections();
    }
}
</script>
