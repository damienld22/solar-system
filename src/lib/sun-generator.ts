import * as THREE from "three";
import sunBg from "$lib/assets/textures/sun.jpg";

const SUN_SIZE = 20;

/**
 * Generate and draw sun
 *
 * @param scene Three scene
 */
export default function sunGenerator(scene: THREE.Scene) {
  const geometry = new THREE.SphereGeometry(SUN_SIZE);
  const texture = new THREE.TextureLoader().load(sunBg);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);

  scene.add(sphere);
}
