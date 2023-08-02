import * as THREE from "three";
import sky from "../../assets/textures/night-sky.jpg";

const texture = new THREE.TextureLoader().load(sky);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

export default texture;
