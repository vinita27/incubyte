import { UP } from "../appConstant";
import { SpaceCraft } from "../src/spaceCraft";

describe("Spacecraft turn up movement", () => {
  const directions = ["N", "S", "E", "W", "Up", "Down"];

  for (const direction of directions) {
    it(`Turn up from direction ${direction}`, () => {
      const spacecraft = new SpaceCraft(0, 0, 0, direction);
      spacecraft.turnUp();
      expect(spacecraft.direction).toEqual(UP);
    });
  }
});
