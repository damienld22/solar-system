import * as THREE from "three";
import mars from "../../assets/textures/mars.jpg";

const geometry = new THREE.SphereGeometry(5);
const texture = new THREE.TextureLoader().load(mars);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
