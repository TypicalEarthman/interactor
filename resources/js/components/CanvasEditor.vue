<template>
    <div id="manager-root" style='height:100%;'>
        <div class="parent" style='position: overflow: hidden; width:100%;height:100%;'>
            <canvas id="paper_root" width="5000" height="1000">
            </canvas>
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
            rectangles: {}
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
                this.drawRect(x,y,width,height,main,text,fill)
            }
        },
        drawRect: function(x,y,width,height,main,text,fill) {
            
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

            let tool = new Tool();

            tool.onMouseDrag = function(event) {
                group.position += event.delta
            }
            view.draw()
        }
    },
    mounted() {
        paper.setup('paper_root')
        this.drawVideos('mount')
    }
}
</script>
