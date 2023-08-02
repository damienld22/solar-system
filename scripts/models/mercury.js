import * as THREE from "three";

const geometry = new THREE.SphereGeometry(5);
const texture = new THREE.TextureLoader().load("/assets/textures/mercury.jpg");
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
