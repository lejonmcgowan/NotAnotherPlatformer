var width = $(document).width();
var height = $(document).height();


//add rendererobject to webpage
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x888888);
document.body.appendChild(renderer.domElement);

//make scene
var scene = new THREE.Scene();
//add objects to scene
var camera = new THREE.OrthographicCamera(-width / 2, width / 2, -height / 2, height / 2, 1, 1000);
camera.rotation.y = 3.14159; //rotate 180 degree to face down the +z axis, a la OpenGL axes

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );
cube.position.z = 20;

scene.add( cube );
    

var renderScene = function()
{
    requestAnimationFrame(renderScene);
    renderer.render(scene,camera);
    
}

renderScene();






