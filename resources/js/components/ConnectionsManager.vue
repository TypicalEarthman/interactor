<template>
    <div id="manager-root" style='height:100%;'>
        <div class="controls">
            <button class="btn btn-primary btn-sm" @click="modal=true" style="position: fixed; bottom:10px;left:45%;"> 
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
        <div class="parent ebb-content" style='position: overflow: hidden; width:100%;height:100%;'>
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
    padding: 0;
    overflow: hidden;
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

function roundRect(ctx, x, y, width, height, radius, fill, text) {
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
        let defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
        for (let side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.fillText(text, x+10, y+35);

}
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
                self.drawConnections('update');

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
                    let info = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        select: function(e) {
            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();

            // get the current mouse position
            let mx=parseInt(e.clientX-this.offsetX);
            let my=parseInt(e.clientY-this.offsetY);

            // test each rect to see if mouse is inside
            let flag = true;
            for(let i in this.rectangles) {
                let r=this.rectangles[i];
                    // if yes, navigate preview to this rectangle
                if(mx>r.x && mx<r.x+r.width && my>r.y && my<r.y+r.height){
                    r.isActive=true;
                    flag = false;
                    let target;
                    this.videos.forEach(function(item) {
                        if(item.id == i) {
                            target = item;
                        };
                    });
                    this.$emit("change_target", target);
                }
                else {
                    r.isActive=false;
                }
            }
            if(flag) {
                let parent = document.querySelector('.parent');
                parent.scrollTo(mx, my);
            }
            this.drawConnections('update');
        },
        myDown: function(e) {

            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();

            // get the current mouse position
            let parent = document.querySelector('.parent');
            this.px = parent.scrollLeft;
            this.py = parent.scrollTop;
            this.mx=parseInt(e.clientX-this.offsetX );
            this.my=parseInt(e.clientY-this.offsetY );
            parent.style.cursor = "grabbing";

            // test each rect to see if mouse is inside
            this.dragok=false;
            
            for(let i in this.rectangles) {
                let r=this.rectangles[i];
                    // if yes, set that rects isDragging=true
                if(this.mx >r.x && this.mx <r.x+r.width && this.my>r.y && this.my<r.y+r.height){
                    this.dragok=true
                    r.isDragging=true;
                }
            }
            if(!this.dragok){
                this.dragCanvas = true;
            }
            // save the current mouse position
            this.startX=this.mx;
            this.startY=this.my;

        },
        myUp: function(e) {
            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();
            let canvas = document.getElementById("canvas");
            let BB=canvas.getBoundingClientRect();
            this.offsetX=BB.left;
            this.offsetY=BB.top;
            let parent = document.querySelector('.parent');
            parent.style.cursor = "auto";

            // clear all the dragging flags
            this.dragok = false;
            this.dragCanvas = false;
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

        },
        canvasMove(dx,dy) {
            let parent = document.querySelector('.parent');
            let x = parent.scrollLeft;
            let y = parent.scrollTop;
            parent.scrollTo(x-dx, y-dy);
        },
        myMove: function(e) {

            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();
            // get the current mouse position
            this.mx=parseInt(e.clientX-this.offsetX );
            this.my=parseInt(e.clientY-this.offsetY );
            // calculate the distance the mouse has moved
            // since the last mousemove
            let dx=this.mx-this.startX;
            let dy=this.my-this.startY;
            if(this.dragCanvas) {
                this.canvasMove(dx,dy);
            }

            // move each rect that isDragging 
            // by the distance the mouse has moved
            // since the last mousemove
            for(let i in this.rectangles) {
                if(this.rectangles[i].isDragging){
                    this.rectangles[i].x+= dx;
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
            let BB=canvas.getBoundingClientRect();
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
                rectangle.font = "15px Arial";
                if(meta.x == undefined) {
                    
                    if(type == 'update') {
                        if(self.rectangles[item.id].isActive) {
                            roundRect(rectangle,self.rectangles[item.id].x,self.rectangles[item.id].y,190,70,30,"#FFC300", item.name);
                        }
                        else {
                            roundRect(rectangle,self.rectangles[item.id].x,self.rectangles[item.id].y,190,70,30,"#BD4E4E", item.name);
                        }
                        
                    }
                    else {
                        y=count*60 + 10;
                        count++;
                        if(item.id == self.rootNumber) {
                            roundRect(rectangle,x,y,190,70,30,"#FFC300", item.name);
                        }
                        else {
                            roundRect(rectangle,x,y,190,70,30,"#BD4E4E", item.name);
                        }
                        if(item.id == self.rootNumber) {
                        self.rectangles[item.id] = {
                            isDragging: false,
                            isActive: true,
                            x: x,
                            y: y,
                            name: item.name,
                            width: 190,
                            height: 70
                        };
                        }
                        else {
                            self.rectangles[item.id] = {
                                isDragging: false,
                                isActive: false,
                                x: x,
                                y: y,
                                name: item.name,
                                width: 190,
                                height: 70
                            };
                        }
                    }
                }
                else {
                    if(type == 'update') {
                        if(self.rectangles[item.id].isActive) {
                            roundRect(rectangle,self.rectangles[item.id].x,self.rectangles[item.id].y,190,70,30,"#FFC300", item.name);
                        }
                        else {
                            roundRect(rectangle,self.rectangles[item.id].x,self.rectangles[item.id].y,190,70,30,"#BD4E4E", item.name);
                        }
                        
                    }
                    else {
                        if(item.id == self.rootNumber) {
                            roundRect(rectangle,meta.x,meta.y,190,70,30,"#FFC300", item.name);
                        }
                        else {
                            roundRect(rectangle,meta.x,meta.y,190,70,30,"#BD4E4E", item.name);
                        }
                        if(item.id == self.rootNumber) {
                            self.rectangles[item.id] = {
                                isDragging: false,
                                isActive: true,
                                x: meta.x,
                                y: meta.y,
                                name: item.name,
                                width: 190,
                                height: 70
                            };
                        }
                        else {
                            self.rectangles[item.id] = {
                                isDragging: false,
                                isActive: false,
                                x: meta.x,
                                y: meta.y,
                                name: item.name,
                                width: 190,
                                height: 70
                            };
                        }
                    }
                }

            });
            this.connections.forEach(function(item) {
                let context = canvas.getContext('2d');
                context.strokeStyle = "#CCC4C6";
                let origin = self.rectangles[item.entry_id];
                let destination = self.rectangles[item.out_id];
                context.beginPath(); 
                let headlen = 20; // length of head in pixels
                let dx = destination.x - origin.x;
                let dy = destination.y+35 - origin.y + 35;    
                let angle = Math.atan2(dy, dx);
                if(origin.x <= destination.x) {
                    if(origin.y >= destination.y) {
                        context.moveTo(origin.x + 190, origin.y + 35);
                        context.lineTo(destination.x, destination.y+70);
                        context.lineTo(destination.x - headlen * Math.cos(angle - Math.PI / 6), destination.y+70 - headlen * Math.sin(angle - Math.PI / 6));
                        context.moveTo(destination.x, destination.y+70);
                        context.lineTo(destination.x- headlen * Math.cos(angle + Math.PI / 6), destination.y+70 - headlen * Math.sin(angle + Math.PI / 6));
                    }
                    else {
                        context.moveTo(origin.x + 190, origin.y + 35);
                        context.lineTo(destination.x, destination.y);
                        context.lineTo(destination.x - headlen * Math.cos(angle - Math.PI / 6), destination.y - headlen * Math.sin(angle - Math.PI / 6));
                        context.moveTo(destination.x, destination.y);
                        context.lineTo(destination.x- headlen * Math.cos(angle + Math.PI / 6), destination.y - headlen * Math.sin(angle + Math.PI / 6));
                        }
                }
                else {
                    if(origin.y >= destination.y) {
                        context.moveTo(origin.x, origin.y + 35);
                        context.lineTo(destination.x + 190, destination.y+70);
                        context.lineTo(destination.x + 190 - headlen * Math.cos(angle - Math.PI / 6), destination.y+70 - headlen * Math.sin(angle - Math.PI / 6));
                        context.moveTo(destination.x + 190, destination.y+70);
                        context.lineTo(destination.x + 190- headlen * Math.cos(angle + Math.PI / 6), destination.y+70 - headlen * Math.sin(angle + Math.PI / 6));
                    }
                    else {
                        context.moveTo(origin.x, origin.y + 35);
                        context.lineTo(destination.x + 190, destination.y);
                        context.lineTo(destination.x + 190 - headlen * Math.cos(angle - Math.PI / 6), destination.y - headlen * Math.sin(angle - Math.PI / 6));
                        context.moveTo(destination.x + 190, destination.y);
                        context.lineTo(destination.x + 190- headlen * Math.cos(angle + Math.PI / 6), destination.y - headlen * Math.sin(angle + Math.PI / 6));
                    }
                }
                context.stroke();

            });
            
            canvas.onmousedown = this.myDown;
            canvas.onmouseup = this.myUp;
            canvas.onmousemove = this.myMove;
            canvas.ondblclick = this.select;
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
        document.querySelector('.parent').scrollTo(0,0);
    }
}
</script>
