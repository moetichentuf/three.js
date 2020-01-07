// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------


document.addEventListener("click", function(lala){

// Create an empty scene
document.getElementById("target").innerHTML = lala;
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#FFFFFF");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#ff0000" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  // Render the scene
  renderer.render(scene, camera);
};

render();
function onmousewheelchange(e) {
    if(e.wheeldelta>0)
     {
     camera.position.z -= 100;
     }
     else
     {
     camera.position.z += 100;
    }
}});