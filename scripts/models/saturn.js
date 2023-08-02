import * as THREE from "three";
import saturn from "../../assets/textures/saturn.jpg";
import saturnRings from "../../assets/textures/saturn_rings_color_map.jpg";

// Sphere
const geometry = new THREE.SphereGeometry(5);
const texture = new THREE.TextureLoader().load(saturn);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);

// Rings
const ringsGeometry = new THREE.RingGeometry(10, 12);
const ringsTexture = new THREE.TextureLoader().load(saturnRings);
const ringsMaterial = new THREE.MeshBasicMaterial({
  map: ringsTexture,
  side: THREE.DoubleSide,
});
const rings = new THREE.Mesh(ringsGeometry, ringsMaterial);

export { sphere, rings };
