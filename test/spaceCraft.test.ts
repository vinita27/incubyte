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
  it("should move forword", () => {
    spaceCraft.moveForword("N");
    expect(spaceCraft).toEqual({
      x: 0,
      y: 1,
      z: 0,
      direction: "N",
    });
  });
});
