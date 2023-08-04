import Planet from "../factories/planet";
import mercuryTexture from "../../assets/textures/mercury.jpg";
import venusTexture from "../../assets/textures/venus.jpg";
import earthTexture from "../../assets/textures/earth.jpg";
import marsTexture from "../../assets/textures/mars.jpg";
import jupiterTexture from "../../assets/textures/jupiter.jpg";
import saturnTexture from "../../assets/textures/saturn.jpg";
import saturnRings from "../../assets/textures/saturn_rings_color_map.jpg";
import uranusTexture from "../../assets/textures/uranus.jpg";
import neptuneTexture from "../../assets/textures/neptune.jpg";

/**
 * Generate and draw all planets
 *
 * @param {object} scene Three scene
 */
export default function planetsGenerator(scene) {
  // Mercury
  const mercury = new Planet({
    name: "Mercury",
    diameter: 4_879.4,
    aphelion: 69_816_900,
    background: mercuryTexture,
    eccentricity: 0.2056,
  });
  mercury.draw(scene);

  // Venus
  const venus = new Planet({
    name: "Venus",
    diameter: 12_103.6,
    aphelion: 108_943_000,
    background: venusTexture,
    eccentricity: 0.00678,
  });
  venus.draw(scene);

  // Earth
  const earth = new Planet({
    name: "Earth",
    diameter: 12_756.3,
    aphelion: 152_097_701,
    background: earthTexture,
    eccentricity: 0.01671123,
  });
  earth.draw(scene);

  // Mars
  const mars = new Planet({
    name: "Mars",
    diameter: 6_792.4,
    aphelion: 249_230_000,
    background: marsTexture,
    eccentricity: 0.09339,
  });
  mars.draw(scene);

  // Jupiter
  const jupiter = new Planet({
    name: "Jupiter",
    diameter: 142_984,
    aphelion: 816_000_000,
    background: jupiterTexture,
    eccentricity: 0.04839,
  });
  jupiter.draw(scene);

  // Saturn
  const saturn = new Planet({
    name: "Saturn",
    diameter: 120_536,
    aphelion: 1_503_500_000,
    background: saturnTexture,
    eccentricity: 0.0539,
  });
  saturn.addRings(saturnRings);
  saturn.draw(scene);

  // Uranus
  const uranus = new Planet({
    name: "Uranus",
    diameter: 51_118,
    aphelion: 3_006_300_000,
    background: uranusTexture,
    eccentricity: 0.04726,
  });
  uranus.draw(scene);

  // Neptune
  const neptune = new Planet({
    name: "Neptune",
    diameter: 49_528,
    aphelion: 4_537_000_000,
    background: neptuneTexture,
    eccentricity: 0.00859,
  });
  neptune.draw(scene);
}
