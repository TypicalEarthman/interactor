@extends('layouts.app')

@section('content')
@endsection

@section('script')
<script>
	const app = new PIXI.Application();
	const loader = PIXI.Loader.shared;
	let sprites = {};
	let container = new PIXI.ParticleContainer(10000, {
		scale: true,
    	position: true,
    	rotation: true,
    });
    app.stage.addChild(container);

    let kerels = [];

	app.renderer.view.style.position = "absolute";
	app.renderer.view.style.display = "block";
	app.renderer.autoResize = true;
	app.renderer.resize(window.innerWidth, window.innerHeight);

	document.body.appendChild(app.view);

	

	loader.add("kerel","images/kerel.png").load((loader,resources) => {

		app.stage.interactive = true;
		app.stage.on("mousemove", (e) => {
			let kerel = new PIXI.Sprite(resources.kerel.texture);
			kerel.scale.set(Math.random() - 0.5);

			kerel.position.copyFrom(e.data.global);

			kerel.rotation = Math.random();
			kerel.anchor.set(0.5);
			container.addChild(kerel);
			kerels.push(kerel);
		});

		app.ticker.add(delta => {
			for(let i = 0; i < kerels.length; i++) {
				let kerel = kerels[i];
				kerel.rotation -= 0.01;
				kerel.position.y += 1;
				kerel.scale.x += 0.003;
				kerel.scale.y += 0.003;
				
			}
		});
	});

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
</script>
@endsection