import { SpaceCraft } from "../src/spaceCraft";

describe("Spacecraft forword movement", () => {
  const directions = ["N", "S", "E", "W", "Up", "Down"];

  for (const direction of directions) {
    it(`Moving forword in direction ${direction}`, () => {
      const spacecraft = new SpaceCraft(0, 0, 0, direction);
      spacecraft.moveForword();

      expect(spacecraft).toEqual({
        x: direction === "E" ? 1 : direction === "W" ? -1 : spacecraft.x,
        y: direction === "N" ? 1 : direction === "S" ? -1 : spacecraft.y,
        z: direction === "Up" ? 1 : direction === "Down" ? -1 : spacecraft.z,
        direction: spacecraft.direction,
      });
    });
  }
});
