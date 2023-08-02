import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Models
import sun from "./models/sun";
import earth from "./models/earth";
import mercury from "./models/mercury";
import venus from "./models/venus";
import mars from "./models/mars";
import jupiter from "./models/jupiter";
import { rings as ringsSaturn, sphere as sphereSaturn } from "./models/saturn";
import uranus from "./models/uranus";
import neptune from "./models/neptune";

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
    0.1,
    2000
  );

  camera.position.set(0, 0, 400);

  //  Add models
  scene.add(sun);
  scene.add(mercury);
  scene.add(venus);
  scene.add(earth);
  scene.add(mars);
  scene.add(jupiter);
  scene.add(sphereSaturn);
  scene.add(ringsSaturn);
  scene.add(uranus);
  scene.add(neptune);

  mercury.position.x += 50;
  venus.position.x += 100;
  earth.position.x += 150;
  mars.position.x += 200;
  jupiter.position.x += 250;
  sphereSaturn.position.x += 300;
  ringsSaturn.position.x += 300;
  ringsSaturn.rotation.x += 2;
  uranus.position.x += 350;
  neptune.position.x += 400;

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
