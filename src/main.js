import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import sunGenerator from "./utils/sun-generator";
import planetsGenerator from "./utils/planets-generator";

function main() {
  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = createCamera();
  camera.position.set(0, 1000, 5000);

  // Add elements
  sunGenerator(scene);
  planetsGenerator(scene);

  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add to DOM
  document.body.appendChild(renderer.domElement);

  // Add controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // Render function
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100000
  );
  return camera;
}

// Start
main();
