import { DOWN } from "../appConstant";
import { SpaceCraft } from "../src/spaceCraft";

describe("Spacecraft turn down movement", () => {
  const directions = ["N", "S", "E", "W", "Up", "Down"];

  for (const direction of directions) {
    it(`Turn down from direction ${direction}`, () => {
      const spacecraft = new SpaceCraft(0, 0, 0, direction);
      spacecraft.turnDown();
      expect(spacecraft.direction).toEqual(DOWN);
    });
  }
});
