import * as THREE from "three";
import config from "../../config.json";
const { planetSizeRatio, starDistanceRatio } = config;

class Planet {
  constructor({ name, diameter, background, aphelion, eccentricity }) {
    this.name = name;
    this.diameter = diameter;
    this.background = background;
    this.semiMajorAxis = aphelion / starDistanceRatio;
    this.eccentricity = eccentricity;
    this.semiMinorAxis =
      this.semiMajorAxis * Math.sqrt(1 - Math.pow(this.eccentricity, 2));
    this.linearEccentricity = Math.sqrt(
      Math.pow(this.semiMajorAxis, 2) - Math.pow(this.semiMinorAxis, 2)
    );
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

  #generateEllipse() {
    const curve = new THREE.EllipseCurve(
      +this.linearEccentricity, // Sun is the second focus of the ellipse
      0,
      this.semiMajorAxis,
      this.semiMinorAxis,
      0,
      2 * Math.PI,
      false,
      1
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: "#FFFFFF" });
    const line = new THREE.Line(geometry, material);

    line.rotation.x += 90 * (Math.PI / 180); // 90° to radians

    return line;
  }

  addRings(background) {
    this.hasRings = true;
    this.ringsBackground = background;
  }

  draw(scene) {
    // Planet
    const sphereMesh = this.#generateSphereMesh();
    sphereMesh.position.x = this.semiMajorAxis + this.linearEccentricity;
    scene.add(sphereMesh);

    // Rings
    if (this.hasRings) {
      const ringsMesh = this.#generateRingsMesh(this.ringsBackground);
      ringsMesh.position.x = this.semiMajorAxis + this.linearEccentricity;
      scene.add(ringsMesh);
    }

    // Ellipse
    const ellipseMesh = this.#generateEllipse();
    scene.add(ellipseMesh);
  }
}

export default Planet;
