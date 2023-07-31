import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Models
import sun from "./models/sun";
import earth from "./models/earth";

// Textures
import bg from "./textures/background";

// Start
if (WebGL.isWebGLAvailable()) {
  main();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("body").appendChild(warning);
}

function main() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  camera.position.set(0, 0, 400);

  //  Add models
  scene.add(sun);
  scene.add(earth);
  earth.position.x += 50;

  // Add background
  scene.background = bg;

  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // Add to DOM
  document.body.appendChild(renderer.domElement);

  // Render
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}
