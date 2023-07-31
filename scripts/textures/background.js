import * as THREE from "three";

const texture = new THREE.TextureLoader().load("/assets/night-sky.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

export default texture;
