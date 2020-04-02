<template>
<div style='height:100%;'>
    <div id="manager-root" style='height:100%;'>
        <div class="parent" style='position: overflow: hidden; width:100%;height:100%;'>
            <canvas id="paper_root" width="5000" height="1000">
            </canvas>
            <div class="tools_button" @click="openTools">
                +
            </div>
        </div>
    </div>
	<transition name="fade">
        <div class="floating_dialog" v-show="connection.modal_conn_first">
            <h4>
            Click on the element to start the connection from
            </h4>

            <button @click="connection.modal_conn_first=false" class="btn btn-primary btn-block btn-sm" style="position: absolute; left: 20px; bottom: 20px; right: 20px; width: auto">
                Close
            </button>
        </div>
	</transition>
	<transition name="fade">
        <div class="floating_dialog" v-show="connection.modal_conn_second">
            <h4>
            Choose the destination element
            </h4>

            <button @click="connection.modal_conn_second=false" class="btn btn-primary btn-block btn-sm" style="position: absolute; left: 20px; bottom: 20px; right: 20px; width: auto">
                Close
            </button>
        </div>
	</transition>
	<transition name="fade">
        <div class="dialog" v-show="connection.configure">
            <h4>
            Customize the look of the options 
            </h4>

            <button @click="connection.configure=false" class="btn btn-primary btn-block btn-sm" style="position: absolute; left: 20px; bottom: 20px; right: 20px; width: auto">
                Close
            </button>
        </div>
	</transition>
	<transition name="fade">
        <div class="floating_dialog" v-show="connection.modal_conn_result">
            <h4>
            Connection has been created
            </h4>

            <button @click="connection.modal_conn_result=false" class="btn btn-primary btn-block btn-sm" style="position: absolute; left: 20px; bottom: 20px; right: 20px; width: auto">
                Close
            </button>
        </div>
	</transition>
</div>
</template>
<style scoped>
.tools_button {
	position: absolute;
	width: 50px;
	height: 50px;
	left:  10px;
	top: 40px;
	background-color: #fff;
	color: #000;
    font-size: 40px;
    line-height: 50px;
    font-weight: bold;
	border-radius: 50px;
	text-align: center;
    box-shadow: 2px 2px 3px #999;
    cursor: pointer;
}
canvas {
    border:1px solid #000000;
}
#manager-root {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-content: flex-start;
    position: relative;
}
.parent {
    padding: 0;
    overflow: hidden;
}
</style>
<script>
import * as paper from 'paper'
paper.install(window)
export default {
    data () {
        return {
            rectangles: {},
            rectanglesDrawing: [],
            drag: false,
            line_draw: false,
            connection: {
                modal_conn_first: false,
                modal_conn_second: false,
                modal_conn_result: false,
                configure: '',
                entry_id: '',
                out_id: ''
            },
            bezier: [],
            buttons: []
        }
    },
    props: {
		episode: Object
    },
    watch: {
    },
    methods: {
        openTools: function() {
            this.drawVideos('mount')
            this.connection.modal_conn_second = false
            this.connection.modal_conn_result = false
            this.connection.modal_conn_first = true
        },
        drawVideos: function(type) {
            this.rectanglesDrawing.forEach(function(item) {
                item.remove();
            })
            this.rectanglesDrawing = []
            let default_x = 20
            let default_y = 20
            let counter = 0
            for(let key in this.episode.videos) {
                let item = this.episode.videos[key]
                let x = default_x
                let y = default_y
                let width = 190
                let height = 70
                let fill = '#BD4E4E'
                let meta = JSON.parse(item.meta)
                let main = false
                let text = item.filename_horiz
                if(type == 'update') {
                    x = this.rectangles[item.id].x
                    y = this.rectangles[item.id].y
                }
                else if(meta.x != undefined) {
                    x = meta.x
                    y = meta.y
                }
                else {
                    y *= counter
                    counter++
                }
                if(item.id == this.episode.current_video_id) {
                    fill = '#FFC300'
                    main = true
                }
                this.rectangles[item.id] = {
                    isDragging: false,
                    x: x,
                    y: y,
                    name: item.name,
                    width: width,
                    height: height
                }
                this.drawRect(x,y,width,height,main,text,fill,key)
            }
        },
        drawRect: function(x,y,width,height,main,text,fill,key) {
            this.rectanglesDrawing[this.rectanglesDrawing.length] =  new Group()
            let rectangle = new Rectangle(new Point(x, y), new Point(x+width, y+height))
            let radius = new Size(30, 30)
            let path = new Path.Rectangle(rectangle, radius)
            path.fillColor = fill
            

            let text_x = x + (width)/2
            let text_y = y + (height)/2

            let text_block = new PointText({
                point: new Point(text_x,text_y),
                content: text,
                justification: 'center',
                fillColor: '#fff',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                fontSize: 14
            })

            this.rectanglesDrawing[this.rectanglesDrawing.length - 1].addChild(path)
            this.rectanglesDrawing[this.rectanglesDrawing.length - 1].addChild(text_block)
            this.rectEvents(this.rectanglesDrawing[this.rectanglesDrawing.length - 1],key,width,height,path)
            view.draw()
        },
        drawConnections: function() {
            this.bezier.forEach(function(item) {
                item.remove();
            })
            this.bezier = []
            this.buttons.forEach(function(item) {
                item.remove();
            })
            this.buttons = []
            let self = this
            let connections = this.episode.connections
            for(let key in connections) {
                let item = connections[key]
                let origin = this.rectangles[item.entry_id]
                let destination = this.rectangles[item.out_id]
                let r1cent
                let r2cent 
                if(origin.x <= destination.x) {          
                    if(origin.y < destination.y) {
                        r1cent = new Point(origin.x + origin.width, origin.y + origin.height/2)
                        r2cent = new Point(destination.x, destination.y + destination.height/2)
                    }
                    else {
                        r1cent = new Point(destination.x , destination.y + destination.height/2)
                        r2cent = new Point(origin.x+ origin.width, origin.y + origin.height/2)
                    }
                }
                else {   
                    if(origin.y < destination.y) {
                        r1cent = new Point(origin.x, origin.y + origin.height/2)
                        r2cent = new Point(destination.x + destination.width, destination.y + destination.height/2)    
                    }
                    else {
                        r1cent = new Point(destination.x + destination.width, destination.y + destination.height/2)
                        r2cent = new Point(origin.x, origin.y + origin.height/2)
                    }
                }
                
                let rc = new Rectangle(r1cent, r2cent)

                let h1 = new Point(rc.topCenter.x - r1cent.x,rc.topCenter.y - r1cent.y)
                let h2 = new Point(rc.bottomCenter.x - r2cent.x,rc.bottomCenter.y - r2cent.y)
            
                let r1seg = new Segment(r1cent, null, h1)
                let r2seg = new Segment(r2cent, h2, null)
                
                self.bezier[self.bezier.length] =  new Path(r1seg, r2seg)
                
                self.bezier[self.bezier.length - 1].strokeColor = '#41E598'
                
                self.buttons[self.buttons.length] =  new Path.Circle(rc.center,8)
                self.buttons[self.buttons.length - 1].fillColor = '#D15411'
                self.buttonEvents(self.buttons[self.buttons.length - 1],item)
                /*
                    Конкуренты
                    Эталон
                    Возможные пути
                */
            }
        },
        buttonEvents: function(button,connection) {
            let self = this
            button.onMouseDown = function (event) {
                console.log(connection)
                self.connection.configure = true
            }
            button.onMouseEnter = function (event) {
                document.querySelector('.parent').style.cursor = "pointer"
            }
            button.onMouseLeave = function (event) {
                document.querySelector('.parent').style.cursor = "default"
            }
        },
        rectEvents: function(group,id,width,height,path) {
            group.onMouseEnter = function (event) {
                document.querySelector('.parent').style.cursor = "pointer"
            }
            group.onMouseLeave = function (event) {
                document.querySelector('.parent').style.cursor = "default"
            }
            let self = this
            group.onMouseDrag = function(event) {
                if(!self.line_draw) {
                    self.drag = true
                    group.position.x += event.delta.x
                    group.position.y += event.delta.y
                    self.rectangles[id].x = group.position.x - self.rectangles[id].width/2
                    self.rectangles[id].y = group.position.y - self.rectangles[id].height/2
                    self.drawConnections()
                }
            }
            group.onMouseUp = function(event) {
                if(self.connection.modal_conn_first) {
                    self.connection.entry_id = id
                    self.connection.modal_conn_first = false
                    self.connection.modal_conn_second = true    
                    path.fillColor = '#588B58'
                }
                else if(self.connection.modal_conn_second) {
                    self.connection.out_id = id
                    self.connection.modal_conn_second = false
                    axios.post('/connection/add', {
                        'entry_id': self.connection.entry_id,
                        'out_id': self.connection.out_id,
                        'episode_id': self.episode.episode_id
                    })
                    .then(function (response) {
                        console.log(response.data)
                        self.drawVideos('mount')
                        self.connection.modal_conn_result = true
                        
                        setTimeout(function() {
                            self.connection.modal_conn_result = false
                        }, 1500)
                    })
                    .catch(function (error) {
                        console.log(error)
                        self.createModal = false;
                    })
                }
                else {                 
                    if(self.drag) {
                        self.drag = false
                        setTimeout(function() {
                            let position = {
                                x: group.position.x - width/2,
                                y: group.position.y - height/2
                            }
                            let request = {
                                meta: position,
                                id: id
                            }
                            axios.post('/video/edit', request)
                                .then(function (response) {
                                    console.log('saved')
                                })
                                .catch(function (error) {
                                    console.log(error)
                                })
                        }, 300);
                    }
                }
            }
        },
        canvasMove: function(event) {
            if(!this.drag && !this.line_draw) {
                let parent = document.querySelector('.parent')
                let x = parent.scrollLeft
                let y = parent.scrollTop
                parent.scrollTo(x-event.delta.x, y-event.delta.y)
            }
        },
        drawGrid: function() {
            let num_rectangles_wide = 80
            let num_rectangles_tall = 16
            let boundingRect = view.bounds
            let width_per_rectangle = boundingRect.width / num_rectangles_wide;
            let height_per_rectangle = boundingRect.height / num_rectangles_tall;
            for (let i = 0; i <= num_rectangles_wide; i++) {
                let xPos = boundingRect.left + i * width_per_rectangle;
                let topPoint = new Point(xPos, boundingRect.top);
                let bottomPoint = new Point(xPos, boundingRect.bottom);
                let aLine = new Path.Line(topPoint, bottomPoint);
                aLine.strokeColor = '#D5D3D2';
            }
            for (var i = 0; i <= num_rectangles_tall; i++) {
                let yPos = boundingRect.top + i * height_per_rectangle;
                let leftPoint = new Point(boundingRect.left, yPos);
                let rightPoint = new Point(boundingRect.right, yPos);
                let aLine = new Path.Line(leftPoint, rightPoint);
                aLine.strokeColor = '#D5D3D2';
            }
        }
    },
    mounted() {
        paper.setup('paper_root')
        this.drawGrid()
        this.drawVideos('mount')
        this.drawConnections()
        let self = this
        view.onMouseDrag = function(event) {
            self.canvasMove(event)
        }
    }
}
</script>
