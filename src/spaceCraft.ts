import { DIRECTION_CORDS, DIRECTION_TURNS, DOWN, UP } from "../appConstant";
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
}
