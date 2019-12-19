let videos = {
	rectangles: []
}; 
let downloadedVideos = [];
let createVideo = function(i,el) {
	let rectangle = new Video(el);
	videos['rectangles'].push(rectangle);
	app.stage.addChild(videos['rectangles'][i]);
};
let renderVideos = function (videos) {
	//pixi.videos['rectangles'] = [];
	for(let i = 0; i < videos.length; i++) {
		createVideo(i,videos[i]);
	}
};
class Video extends PIXI.Graphics {
	constructor(el) {
		super();
		// Rectangle styling
		this.beginFill(0xC27261);
		this.drawRect(0, 0, 256, 144);
		this.endFill();

		// Add text to rectangle
		this.id = el.id;
		let videoName = new PIXI.Text(el.name);
		this.addChild(videoName);

		this.interactive = true;
		//Dragging
		 this
			.on('pointerdown', this.onDragStart)
			.on('pointerup', this.onDragEnd)
			.on('pointerupoutside', this.onDragEnd)
			.on('pointermove', this.onDragMove);

		// Rectangle positioning
		let pos = JSON.parse(el.meta);
		this.x = 20;
		this.y = 20;
		if( JSON.parse(el.meta).x != undefined) {
			this.x = pos.x;
			this.y = pos.y;
		}
	}
	onDragStart(event) {
		this.data = event.data;
		this.alpha = 0.5;
		this.dragging = true;
	}
	onDragEnd() {
		this.alpha = 1;
		this.dragging = false;
		// Set the interaction data to null
		this.data = null;
		let position = {
			x: this.x,
			y: this.y
		};
		position = JSON.stringify(position);
		let request = {
			meta: position,
			id: this.id
		}
		this.updatePosition(request);
	}
	onDragMove() {
		if (this.dragging) {
			const newPosition = this.data.getLocalPosition(this.parent);
			// Set pointer on center
			this.x = newPosition.x - 128;
			this.y = newPosition.y -72;
		}
	}
	updatePosition(data) {
		axios.post('/video/edit', data)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})
	}

}