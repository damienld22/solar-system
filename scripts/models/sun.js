import * as THREE from "three";
import sun from "../../assets/textures/sun.jpg";

const geometry = new THREE.SphereGeometry(20);
const texture = new THREE.TextureLoader().load(sun);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

export default sphere;
