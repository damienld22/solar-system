import * as THREE from "three";
import saturn from "../../assets/textures/saturn.jpg";

const geometry = new THREE.SphereGeometry(5);
const texture = new THREE.TextureLoader().load(saturn);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
