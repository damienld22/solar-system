import * as THREE from "three";
import venus from "../../assets/textures/venus.jpg";

const geometry = new THREE.SphereGeometry(5);
const texture = new THREE.TextureLoader().load(venus);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
