import { direction } from "../types";
import { DIRECTION_CORDS } from "../appConstant";
export class SpaceCraft {
  x: number;
  y: number;
  z: number;
  direction: string;
  constructor(x: number, y: number, z: number, direction: string) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }
  moveForword(direction: direction) {
    const { x, y, z } = DIRECTION_CORDS[direction];
    this.x += x;
    this.y += y;
    this.z += z;
  }
  moveBackword(direction: direction) {
    const { x, y, z } = DIRECTION_CORDS[direction];
    this.x -= x;
    this.y -= y;
    this.z -= z;
  }
}
