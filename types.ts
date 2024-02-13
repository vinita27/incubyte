export type direction = "N" | "E" | "W" | "S" | "Up" | "Down";

export interface IDirectionTurn {
  [key: string]: { right: string; left: string };
}

export interface IDirectionCord {
  [key: string]: { x: number; y: number; z: number };
}
