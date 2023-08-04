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
    diameter: 4879.4,
    starDistance: 57909000,
    background: mercuryTexture,
  });
  mercury.draw(scene);

  // Venus
  const venus = new Planet({
    name: "Venus",
    diameter: 12103.6,
    starDistance: 108160000,
    background: venusTexture,
  });
  venus.draw(scene);

  // Earth
  const earth = new Planet({
    name: "Earth",
    diameter: 12756.3,
    starDistance: 149600000,
    background: earthTexture,
  });
  earth.draw(scene);

  // Mars
  const mars = new Planet({
    name: "Mars",
    diameter: 6792.4,
    starDistance: 227990000,
    background: marsTexture,
  });
  mars.draw(scene);

  // Jupiter
  const jupiter = new Planet({
    name: "Jupiter",
    diameter: 142984,
    starDistance: 778360000,
    background: jupiterTexture,
  });
  jupiter.draw(scene);

  // Saturn
  const saturn = new Planet({
    name: "Saturn",
    diameter: 120536,
    starDistance: 1433500000,
    background: saturnTexture,
  });
  saturn.addRings(saturnRings);
  saturn.draw(scene);

  // Uranus
  const uranus = new Planet({
    name: "Uranus",
    diameter: 51118,
    starDistance: 2872400000,
    background: uranusTexture,
  });
  uranus.draw(scene);

  // Neptune
  const neptune = new Planet({
    name: "Neptune",
    diameter: 49528,
    starDistance: 4498400000,
    background: neptuneTexture,
  });
  neptune.draw(scene);
}
