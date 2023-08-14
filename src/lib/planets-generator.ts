import Planet from "./planet-factory";
import mercuryTexture from "$lib/assets/textures/mercury.jpg";
import venusTexture from "$lib/assets/textures/venus.jpg";
import earthTexture from "$lib/assets/textures/earth.jpg";
import marsTexture from "$lib/assets/textures/mars.jpg";
import jupiterTexture from "$lib/assets/textures/jupiter.jpg";
import saturnTexture from "$lib/assets/textures/saturn.jpg";
import saturnRings from "$lib/assets/textures/saturn_rings_color_map.jpg";
import uranusTexture from "$lib/assets/textures/uranus.jpg";
import neptuneTexture from "$lib/assets/textures/neptune.jpg";

/**
 * Generate and draw all planets
 *
 * @param scene Three scene
 */
export default function planetsGenerator(scene: THREE.Scene) {
  // Mercury
  const mercury = new Planet({
    name: "Mercury",
    diameter: 4_879.4,
    aphelion: 69_816_900,
    background: mercuryTexture,
    eccentricity: 0.2056,
    inclination: 7,
  });
  mercury.draw(scene);

  // Venus
  const venus = new Planet({
    name: "Venus",
    diameter: 12_103.6,
    aphelion: 108_943_000,
    background: venusTexture,
    eccentricity: 0.00678,
    inclination: 3.39471,
  });
  venus.draw(scene);

  // Earth
  const earth = new Planet({
    name: "Earth",
    diameter: 12_756.3,
    aphelion: 152_097_701,
    background: earthTexture,
    eccentricity: 0.01671123,
    inclination: 0,
  });
  earth.draw(scene);

  // Mars
  const mars = new Planet({
    name: "Mars",
    diameter: 6_792.4,
    aphelion: 249_230_000,
    background: marsTexture,
    eccentricity: 0.09339,
    inclination: 1.85,
  });
  mars.draw(scene);

  // Jupiter
  const jupiter = new Planet({
    name: "Jupiter",
    diameter: 142_984,
    aphelion: 816_000_000,
    background: jupiterTexture,
    eccentricity: 0.04839,
    inclination: 1.304,
  });
  jupiter.draw(scene);

  // Saturn
  const saturn = new Planet({
    name: "Saturn",
    diameter: 120_536,
    aphelion: 1_503_500_000,
    background: saturnTexture,
    eccentricity: 0.0539,
    inclination: 2.486,
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
    inclination: 0.77323,
  });
  uranus.draw(scene);

  // Neptune
  const neptune = new Planet({
    name: "Neptune",
    diameter: 49_528,
    aphelion: 4_537_000_000,
    background: neptuneTexture,
    eccentricity: 0.00859,
    inclination: 1.77,
  });
  neptune.draw(scene);
}
