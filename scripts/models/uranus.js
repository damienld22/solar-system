import * as THREE from "three";
import uranus from "../../assets/textures/uranus.jpg";

const geometry = new THREE.SphereGeometry(5);
const texture = new THREE.TextureLoader().load(uranus);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
