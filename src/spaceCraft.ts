import {
  DIRECTION_CORDS,
  DIRECTION_TURNS,
  DOWN,
  INVALID_COMMAND,
  UP,
} from "../appConstant";
import { input } from "../types";
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
  moveForword() {
    const { x, y, z } = DIRECTION_CORDS[this.direction];
    this.x += x;
    this.y += y;
    this.z += z;
  }
  moveBackword() {
    const { x, y, z } = DIRECTION_CORDS[this.direction];
    this.x -= x;
    this.y -= y;
    this.z -= z;
  }

  turnRight() {
    this.direction = DIRECTION_TURNS[this.direction].right;
  }
  turnLeft() {
    this.direction = DIRECTION_TURNS[this.direction].left;
  }
  turnUp() {
    this.direction = UP;
  }
  turnDown() {
    this.direction = DOWN;
  }
  translator(commands: input): SpaceCraft | string {
    for (const input of commands) {
      switch (input) {
        case "f":
          this.moveForword();
          break;
        case "b":
          this.moveBackword();
          break;
        case "u":
          this.turnUp();
          break;
        case "d":
          this.turnDown();
          break;
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
        default:
          return INVALID_COMMAND;
      }
    }
    return this;
  }
}
