import * as THREE from "three";
import earth from "../../assets/textures/earth.jpg";

const geometry = new THREE.SphereGeometry(5);
const texture = new THREE.TextureLoader().load(earth);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
