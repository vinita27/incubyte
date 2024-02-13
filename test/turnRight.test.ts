import { DIRECTION_TURNS } from "../appConstant";
import { SpaceCraft } from "../src/spaceCraft";

describe("Spacecraft turn right movement", () => {
  const directions = ["N", "S", "E", "W", "Up", "Down"];

  for (const direction of directions) {
    it(`Turn right from direction ${direction}`, () => {
      const spacecraft = new SpaceCraft(0, 0, 0, direction);
      spacecraft.turnRight();
      expect(spacecraft.direction).toEqual(DIRECTION_TURNS[direction].right);
    });
  }
});
