import { Creature } from "./Creature";

export class Troll extends Creature {
  constructor(name: string) {
    super(name, 200, 30);
  }

  move(): string {
    return `${this.name} se movimenta pelas estepes.`;
  }
}
