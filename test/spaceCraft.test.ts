import { SpaceCraft } from "../src/spaceCraft";
describe("SpaceCraft", () => {
  let spaceCraft: SpaceCraft;
  beforeEach(() => {
    spaceCraft = new SpaceCraft(0, 0, 0, "N");
  });
  it("existed", () => {
    expect(spaceCraft).toBeDefined();
  });
  it("should except x,y,z and direction", () => {
    expect(spaceCraft).toBeDefined();
  });
  
  
});
