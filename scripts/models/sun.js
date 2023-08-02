import * as THREE from "three";

const geometry = new THREE.SphereGeometry(20);
const texture = new THREE.TextureLoader().load("/assets/textures/sun.jpg");
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
