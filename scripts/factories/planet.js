import * as THREE from "three";
import config from "../../config.json";
const { planetSizeRatio, starDistanceRatio, starDistanceOffset } = config;

class Planet {
  constructor({ name, diameter, background, starDistance, scene }) {
    this.name = name;
    this.diameter = diameter;
    this.background = background;
    this.starDistance = starDistance;
    this.scene = scene;

    // Add sphere
    this.#addToScene(this.#generateSphereMesh());
  }

  #generateSphereMesh() {
    const geometry = new THREE.SphereGeometry(this.diameter / planetSizeRatio);
    const texture = new THREE.TextureLoader().load(this.background);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    return new THREE.Mesh(geometry, material);
  }

  #generateRingsMesh(background) {
    const ringsGeometry = new THREE.RingGeometry(
      (this.diameter * 2) / planetSizeRatio,
      12
    );
    const ringsTexture = new THREE.TextureLoader().load(background);
    const ringsMaterial = new THREE.MeshBasicMaterial({
      map: ringsTexture,
      side: THREE.DoubleSide,
    });
    const ringsMesh = new THREE.Mesh(ringsGeometry, ringsMaterial);
    ringsMesh.rotation.x += 2;

    return ringsMesh;
  }

  addRings(background) {
    this.#addToScene(this.#generateRingsMesh(background));
  }

  #addToScene(mesh) {
    // Set position to star
    mesh.position.x =
      this.starDistance / starDistanceRatio + starDistanceOffset;
    this.scene.add(mesh);
  }
}

export default Planet;
