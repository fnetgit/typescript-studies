import { Creature } from "./Creature";

export class Elf extends Creature {
  constructor(name: string) {
    super(name, 60, 25);
  }

  move(): string {
    return `${this.name} espreita pela floresta.`;
  }
}
