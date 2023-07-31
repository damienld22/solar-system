import * as THREE from "three";

const geometry = new THREE.SphereGeometry(20);
const material = new THREE.MeshBasicMaterial({ color: "yellow" });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
