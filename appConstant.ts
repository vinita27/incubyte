import { IDirectionCord, IDirectionTurn } from "./types";

export const DIRECTION_CORDS: IDirectionCord = {
  N: { x: 0, y: 1, z: 0 },
  S: { x: 0, y: -1, z: 0 },
  E: { x: 1, y: 0, z: 0 },
  W: { x: -1, y: 0, z: 0 },
  Up: { x: 0, y: 0, z: 1 },
  Down: { x: 0, y: 0, z: -1 },
};

export const DIRECTION_TURNS: IDirectionTurn = {
  N: { right: "E" },
  S: { right: "W" },
  E: { right: "S" },
  W: { right: "N" },
  Up: { right: "S" },
  Down: { right: "N" },
};
