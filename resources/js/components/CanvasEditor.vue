<template>
    <div id="manager-root" style='height:100%;'>
        <div class="parent" style='position: overflow: hidden; width:100%;height:100%;'>
            <canvas id="paper_root" width="5000" height="1000">
            </canvas>
        </div>
    </div>
</template>
<style scoped>
canvas {
    border:1px solid #000000;
}
#manager-root {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-content: flex-start;
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
            drag: false
        }
    },
    props: {
		episode: Object
    },
    watch: {
    },
    methods: {
        drawVideos: function(type) {
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
            let group = new Group()
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
            group.addChild(path)
            group.addChild(text_block)
            this.rectEvents(group,key,width,height)
            view.draw()
        },
        rectEvents: function(group,id,width,height) {
            let self = this
            group.onMouseDrag = function(event) {
                self.drag = true
                group.position.x += event.delta.x
                group.position.y += event.delta.y
            }
            group.onMouseUp = function(event) {
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
        },
        canvasMove: function(event) {
            if(!this.drag) {
                console.log(event.delta)
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
        let self = this
        view.onMouseDrag = function(event) {
            self.canvasMove(event)
        }
    }
}
</script>
