<template>
    <div id="manager-root">
        <div class="controls">
            <button class="btn btn-primary btn-sm" @click="modal=true">
                Add connection
            </button>
            <!--
            <button @click="root=true">
                Set root
            </button>
        -->
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
            <!--
            
        -->
            <h2>
                Connection
            </h2>

            <div class="form-group row">
                <div class="col-md-3">
                    <label class="col-form-label">From:</label>
                </div>
                <div class="col-md-9">
                    <select v-model="origin" class="form-control">
                        <option v-bind:value="index" v-for="(video,index) in videos">
                            {{ video.name }} ({{video.filename}})
                        </option>
                    </select>
                </div>
                
            </div>

            <div class="form-group row">
                <div class="col-md-3">
                    <label class="col-form-label">To:</label>
                </div>
                <div class="col-md-9">
                    <select v-model="destination" class="form-control">
                        <option v-bind:value="index" v-for="(video,index) in videos">
                            {{ video.name }} ({{video.filename}})
                        </option>
                    </select>
                </div>
                
            </div>

           <button @click="modal=false" class="btn btn-primary btn-block btn-sm" style="position: absolute; left: 20px; bottom: 20px; right: 20px; width: auto">
                Close
            </button>
            
            <button @click="createConnection" class="btn btn-primary btn-block btn-sm">
                Add connection
            </button>
        </div>
        <div class="parent">
            <canvas id="canvas" width="5000" height="1000">
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
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 300px;
    margin: 0 0 0 -150px;
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
            rectangles: {},
            mx: '',
            my: '',
            dragok: '',
            startX: '',
            startY: '',
            offsetX: '',
            offsetY: ''
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
                self.drawConnections('mount');

                self.$emit("redraw_connections", response.data);
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
        
        updatePosition: function(data) {
            let self = this
            axios.post('/video/edit', data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        myDown: function(e) {

            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();

            // get the current mouse position
            this.mx=parseInt(e.clientX-this.offsetX);
            this.my=parseInt(e.clientY-this.offsetY);
            console.log(this.rectangles)

            // test each rect to see if mouse is inside
            this.dragok=false;
            
            for(let i in this.rectangles) {
                var r=this.rectangles[i];
                    // if yes, set that rects isDragging=true
                if(this.mx>r.x && this.mx<r.x+r.width && this.my>r.y && this.my<r.y+r.height){
                    this.dragok=true
                    r.isDragging=true;
                }
            }
            // save the current mouse position
            this.startX=this.mx;
            this.startY=this.my;

        },
        myUp: function(e) {
            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();

            // clear all the dragging flags
            this.dragok = false;
            for(let i in this.rectangles) {
                if(this.rectangles[i].isDragging) {
                    this.rectangles[i].isDragging=false;
                    
                    let position = {
                        x: this.rectangles[i].x,
                        y: this.rectangles[i].y
                    };
                    position = JSON.stringify(position);
                    let request = {
                        meta: position,
                        id: i
                    }
                    this.updatePosition(request);
                }
            }
            console.log(this.rectangles)

        },
        myMove: function(e) {

            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();

            // get the current mouse position
            this.mx=parseInt(e.clientX-this.offsetX);
            this.my=parseInt(e.clientY-this.offsetY);

            // calculate the distance the mouse has moved
            // since the last mousemove
            var dx=this.mx-this.startX;
            var dy=this.my-this.startY;

            // move each rect that isDragging 
            // by the distance the mouse has moved
            // since the last mousemove
            for(let i in this.rectangles) {
                if(this.rectangles[i].isDragging){
                    console.log(this.rectangles[i])
                    this.rectangles[i].x+=dx;
                    this.rectangles[i].y+=dy;
                }
            }
            // reset the starting mouse position for the next mousemove
            this.startX=this.mx;
            this.startY=this.my;
            if(this.dragok) {
                this.drawConnections('update');
            }
        },
        drawConnections: function(type) {
            let self = this;  
            let canvas = document.getElementById("canvas");
            let box = canvas.getContext("2d");
            box.clearRect(0, 0, 5000, 1000);
            var BB=canvas.getBoundingClientRect();
            this.offsetX=BB.left;
            this.offsetY=BB.top;
            this.meta.connections = [
                this.unPicked
            ];
            let x = 20;
            let y = 0;
            let count = 0;
            this.videos.forEach(function(item) {
                let meta = JSON.parse(item.meta)
                let rectangle = canvas.getContext("2d");
                if(meta.x == undefined) {
                    
                    if(type == 'update') {
                        y=count*60 + 10;
                        count++;
                        rectangle.fillStyle = "red";
                        rectangle.fillRect(self.rectangles[item.id].x, self.rectangles[item.id].y, 100, 30);
                        rectangle.fillStyle = "white";
                        rectangle.fillText(self.rectangles[item.id].name, self.rectangles[item.id].x+10, self.rectangles[item.id].y+10);
                        
                    }
                    else {
                        y=count*60 + 10;
                        count++;
                        rectangle.fillStyle = "red";
                        rectangle.fillRect(x, y, 100, 30);
                        rectangle.fillStyle = "white";
                        rectangle.fillText(item.name, x+10, y+10);
                        self.rectangles[item.id] = {
                            isDragging: false,
                            x: x,
                            y: y,
                            name: item.name,
                            width: 100,
                            height: 30
                        };
                    }
                }
                else {
                    if(type == 'update') {
                        y=count*60 + 10;
                        count++;
                        rectangle.fillStyle = "red";
                        rectangle.fillRect(self.rectangles[item.id].x, self.rectangles[item.id].y, 100, 30);
                        rectangle.fillStyle = "white";
                        rectangle.fillText(self.rectangles[item.id].name, self.rectangles[item.id].x+10, self.rectangles[item.id].y+10);
                        
                    }
                    else {
                        rectangle.fillStyle = "red";
                        rectangle.fillRect(meta.x, meta.y, 100, 30);
                        rectangle.fillStyle = "white";
                        rectangle.fillText(item.name, meta.x+10, meta.y+10);
                        self.rectangles[item.id] = {
                            isDragging: false,
                            x: meta.x,
                            y: meta.y,
                            name: item.name,
                            width: 100,
                            height: 30
                        };
                    }
                }

            });
            this.connections.forEach(function(item) {
                let context = canvas.getContext('2d');
                let origin = self.rectangles[item.entry_id];
                let destination = self.rectangles[item.out_id];
                context.beginPath(); 
                let headlen = 10; // length of head in pixels
                let dx = destination.x - origin.x;
                let dy = destination.y+15 - origin.y + 15;    
                let angle = Math.atan2(dy, dx);
                context.moveTo(origin.x+ 50, origin.y + 15);
                context.lineTo(destination.x + 50, destination.y+15);
                context.lineTo(destination.x + 50 - headlen * Math.cos(angle - Math.PI / 6), destination.y+15 - headlen * Math.sin(angle - Math.PI / 6));
                context.moveTo(destination.x +50, destination.y+15);
                context.lineTo(destination.x + 50- headlen * Math.cos(angle + Math.PI / 6), destination.y+15 - headlen * Math.sin(angle + Math.PI / 6));
                context.stroke();

            });
            
            canvas.onmousedown = this.myDown;
            canvas.onmouseup = this.myUp;
            canvas.onmousemove = this.myMove;

        }
    },
    mounted() {
        this.videos = JSON.parse(this.json_videos);
        this.connections = JSON.parse(this.json_connections);
        this.rootNumber = parseInt(this.root_number);
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
         this.drawConnections('mount');
    }
}
</script>
