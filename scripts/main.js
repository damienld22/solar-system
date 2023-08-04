import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Planet from "./factories/planet";

// Textures
import bg from "./textures/background";
import mercuryTexture from "../assets/textures/mercury.jpg";
import venusTexture from "../assets/textures/venus.jpg";
import earthTexture from "../assets/textures/earth.jpg";
import marsTexture from "../assets/textures/mars.jpg";
import jupiterTexture from "../assets/textures/jupiter.jpg";
import saturnTexture from "../assets/textures/saturn.jpg";
import saturnRings from "../assets/textures/saturn_rings_color_map.jpg";
import uranusTexture from "../assets/textures/uranus.jpg";
import neptuneTexture from "../assets/textures/neptune.jpg";

// Models
import sun from "./models/sun";

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
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100000
  );
  camera.position.set(0, 0, 5000);

  // SUN
  scene.add(sun);

  // PLANETS
  const mercury = new Planet({
    name: "Mercury",
    diameter: 4879.4,
    starDistance: 57909000,
    background: mercuryTexture,
    scene,
  });

  const venus = new Planet({
    name: "Venus",
    diameter: 12103.6,
    starDistance: 108160000,
    background: venusTexture,
    scene,
  });

  const earth = new Planet({
    name: "Earth",
    diameter: 12756.3,
    starDistance: 149600000,
    background: earthTexture,
    scene,
  });

  const mars = new Planet({
    name: "Mars",
    diameter: 6792.4,
    starDistance: 227990000,
    background: marsTexture,
    scene,
  });

  const jupiter = new Planet({
    name: "Jupiter",
    diameter: 142984,
    starDistance: 778360000,
    background: jupiterTexture,
    scene,
  });

  const saturn = new Planet({
    name: "Saturn",
    diameter: 120536,
    starDistance: 1433500000,
    background: saturnTexture,
    scene,
  });
  saturn.addRings(saturnRings);

  const uranus = new Planet({
    name: "Uranus",
    diameter: 51118,
    starDistance: 2872400000,
    background: uranusTexture,
    scene,
  });

  const neptune = new Planet({
    name: "Neptune",
    diameter: 49528,
    starDistance: 4498400000,
    background: neptuneTexture,
    scene,
  });

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
