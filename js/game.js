var width = $(document).width();
var height = $(document).height();


//add rendererobject to webpage
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x888888);
document.body.appendChild(renderer.domElement);

//make scene
var scene = new THREE.Scene();
//add objects to scene
var camera = new THREE.OrthographicCamera(-width / 2, width / 2, -height / 2, height / 2, 1, 100);    
scene.add(camera);
    

var renderScene = function()
{
    requestAnimationFrame(renderScene);
    renderer.render(scene,camera);
    
}

renderScene();






