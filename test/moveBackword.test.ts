import { SpaceCraft } from "../src/spaceCraft";
import { direction } from "../types";

describe("Spacecraft backword movement", () => {
  const directions = ["N", "S", "E", "W", "Up", "Down"];

  for (const direction of directions) {
    it(`Moving backword in direction ${direction}`, () => {
      const spacecraft = new SpaceCraft(0, 0, 0, direction);
      spacecraft.moveBackword(direction as direction);

      expect(spacecraft).toEqual({
        x: direction === "E" ? -1 : direction === "W" ? 1 : spacecraft.x,
        y: direction === "N" ? -1 : direction === "S" ? 1 : spacecraft.y,
        z: direction === "Up" ? -1 : direction === "Down" ? 1 : spacecraft.z,
        direction: direction,
      });
    });
  }
});
