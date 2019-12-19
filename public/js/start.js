const app = new PIXI.Application({
	backgroundColor: 0x1099bb
});
const loader = PIXI.Loader.shared;

let container = new PIXI.ParticleContainer(10000, {
	scale: true,
	position: true,
	rotation: true,
});

let startProcess = function() {
	app.stage.addChild(container);
	app.renderer.view.style.position = "absolute";
	app.renderer.view.style.display = "block";
	app.renderer.autoResize = true;
	app.renderer.resize(window.innerWidth, window.innerHeight);

	document.body.appendChild(app.view);
	getVideos();
	renderVideos(downloadedVideos);
};
startProcess();