// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------



// Create an empty scene

var isMouseDown = false;
var rotateSpeed = 0;

    var scene = new THREE.Scene();

// Create a basic perspective camera
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

// Create a renderer with Antialiasing
    var renderer = new THREE.WebGLRenderer({antialias: true});

// Configure renderer clear color
    renderer.setClearColor("#FFFFFF");

// Configure renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);

// Append Renderer to DOM
    document.body.appendChild(renderer.domElement);

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({color: "#ff0000"});
    var cube = new THREE.Mesh(geometry, material);

// Add cube to Scene
    scene.add(cube);
//document.addEventListener("click", function(lala){
//let lala =document.getElementById("target").innerHTML;
// Render Loop

///var lala = function    () {

    //requestAnimationFrame( lala );

    //cube.rotation.x += 0;
    //cube.rotation.y += 0;

    // Render the scene
    ///renderer.lala(scene, camera);


//}
window.addEventListener('mousedown', () => isMouseDown = true,false);
window.addEventListener('mouseup', () => isMouseDown = false,false);

animate();

function animate() {

    requestAnimationFrame(animate);

    if(isMouseDown) rotateSpeed += 0.001;
    else rotateSpeed /= 1.01;
    cube.rotation.y += rotateSpeed;

    render();

}

function render() {

    renderer.render(scene, camera);

}


