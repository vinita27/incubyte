import { INVALID_COMMAND } from "../appConstant";
import { SpaceCraft } from "../src/spaceCraft";

describe("Translating spacecraft commands", () => {
  let spaceCraft: SpaceCraft;
  beforeEach(() => {
    spaceCraft = new SpaceCraft(0, 0, 0, "N");
  });
  it("Should return coordinates after running all commands", () => {
    const commands = ["f", "r", "u", "b", "l"];
    const result = spaceCraft.translator(commands);
    expect(result).toBeDefined();
  });
  it("Should return (0,1,-1) with direction N when given with commands [f,r,u,b,l]", () => {
    const finalCords = new SpaceCraft(0, 1, -1, "N");
    const commands = ["f", "r", "u", "b", "l"];
    const result = spaceCraft.translator(commands);
    expect(result).toEqual(finalCords);
  });
  it("Should print invalid command if any invalid command given", () => {
    const commands = ["f", "k"];
    const result = spaceCraft.translator(commands);
    expect(result).toEqual(INVALID_COMMAND);
  });
});
