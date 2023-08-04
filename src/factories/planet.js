import * as THREE from "three";
import config from "../../config.json";
const { planetSizeRatio, starDistanceRatio } = config;

class Planet {
  constructor({ name, diameter, background, starDistance }) {
    this.name = name;
    this.diameter = diameter;
    this.background = background;
    this.starDistance = starDistance;
    this.hasRings = false;
    this.ringsBackground = null;
  }

  #generateSphereMesh() {
    const geometry = new THREE.SphereGeometry(this.diameter / planetSizeRatio);
    const texture = new THREE.TextureLoader().load(this.background);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    return new THREE.Mesh(geometry, material);
  }

  #generateRingsMesh(background) {
    const innerRadius = (this.diameter * 2) / planetSizeRatio;
    const ringsGeometry = new THREE.RingGeometry(innerRadius, innerRadius - 40);
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
    this.hasRings = true;
    this.ringsBackground = background;
  }

  draw(scene) {
    const sphereMesh = this.#generateSphereMesh();
    sphereMesh.position.x = this.starDistance / starDistanceRatio;
    scene.add(sphereMesh);

    if (this.hasRings) {
      const ringsMesh = this.#generateRingsMesh(this.ringsBackground);
      ringsMesh.position.x = this.starDistance / starDistanceRatio;
      scene.add(ringsMesh);
    }
  }
}

export default Planet;
