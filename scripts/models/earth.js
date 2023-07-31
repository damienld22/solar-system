import * as THREE from "three";

const geometry = new THREE.SphereGeometry(5);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
