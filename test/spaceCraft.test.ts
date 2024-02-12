import { SpaceCraft } from "../src/spaceCraft";
describe("SpaceCraft", () => {
  it("existed", () => {
    const spaceCraft = new SpaceCraft(0, 0, 0, "N");
    expect(spaceCraft).toBeDefined();
  });
  it("should except x,y,z  and direction", () => {
    const spaceCraft = new SpaceCraft(0, 0, 0, "N");
    expect(spaceCraft).toBeDefined();
  });
});
