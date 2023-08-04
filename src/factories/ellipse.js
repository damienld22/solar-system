import * as THREE from "three";
import config from "../../config.json";

class Ellipse {
  constructor({ radius, eccentricity, scene }) {
    this.radius = radius;
    this.eccentricity = eccentricity;
    this.scene = scene;
    this.semiMajorAxis = this.radius / config.starDistanceRatio;
    this.semiMinorAxis =
      this.semiMajorAxis * Math.sqrt(1 - Math.pow(this.eccentricity, 2));
    this.linearEccentricity = Math.sqrt(
      Math.pow(this.semiMajorAxis, 2) - Math.pow(this.semiMinorAxis, 2)
    );

    // Add ellipse
    this.scene.add(this.#generateEllipse());
  }

  #generateEllipse() {
    const curve = new THREE.EllipseCurve(
      -this.linearEccentricity, // Sun is the second focus of the ellipse
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
}

export default Ellipse;
