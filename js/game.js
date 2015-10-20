var container, stats;
var camera, scene, renderer;
var width = 640, height = 480;

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.OrthographicCamera( -width, width, height, -height, -1000, 2000);
	camera.position.x = 200;
	camera.position.y = 100;
	camera.position.z = 200;

	scene = new THREE.Scene();

	/*alternative grid?*/
	var helper = new THREE.GridHelper( 500, 50 );
	helper.setColors( 0x000000, 0x808080 );
	scene.add( helper );

	// Cube in random grid spot. OO this entire setup later

	var geometry = new THREE.BoxGeometry( 100, 100, 100);
	//var material = new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, overdraw: 0.5 } );
	var material = new THREE.MeshPhongMaterial({color: 0x880000});

	var cube = new THREE.Mesh( geometry, material );

	//cube.scale.y = Math.floor( Math.random() * 2 + 1 );

	cube.position.x = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50;
	cube.position.y = ( cube.scale.y * 50 ) / 2 + 25;
	cube.position.z = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50;

	scene.add( cube );

	// Lights

	var ambientLight = new THREE.AmbientLight(0xFFFFFF);
	scene.add( ambientLight );

	var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add( directionalLight );

	var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add( directionalLight );

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor( 0xf0f0f0 );
	//renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize(width, height);
	container.appendChild( renderer.domElement );
}

function animate() {

	requestAnimationFrame( animate );

	render();
}

function render() {

	var timer = Date.now() * 0.0002;
	//change to manual control for later
	camera.position.x = Math.cos( timer ) * 200;
	camera.position.z = Math.sin( timer ) * 200;
	camera.lookAt( scene.position );

	renderer.render( scene, camera );

}