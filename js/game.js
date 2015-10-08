var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene;

var cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.rotation.y = Math.PI * 45 / 180;
scene.add(cube);

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
var testCamera = new THREE.OrthographicCamera(-width / 2, width / 2, -height / 2, 10, 10000);
camera.position.y = 160;
camera.position.z = 400;
camera.lookAt(cube.position);
//testCamera.lookAt(cube.position);

scene.add(testCamera);

var skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

scene.add(skybox);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);

scene.add(pointLight);

var clock = new THREE.Clock;

function render() {
	requestAnimationFrame(render);
	
	cube.rotation.y -= clock.getDelta();
	
	renderer.render(scene, testCamera);
}

render();