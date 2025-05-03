import { Creature } from "./Creature";

export class Dragon extends Creature {
  constructor(name: string) {
    super(name, 300, 50);
  }

  move(): string {
    return `${this.name} voa pelos céus.`;
  }
}
