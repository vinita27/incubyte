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
  N: { right: "E", left: "W" },
  S: { right: "W", left: "E" },
  E: { right: "S", left: "N" },
  W: { right: "N", left: "S" },
  Up: { right: "S", left: "N" },
  Down: { right: "N", left: "S" },
};

export const UP = "Up";
export const DOWN = "Down";
