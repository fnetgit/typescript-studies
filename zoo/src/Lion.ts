import { Animal } from "./Animal";

export class Lion extends Animal {
  constructor(name: string, age: number, species: string) {
    super(name, age, species);
  }

  makeSound(): string {
    return "Roar!";
  }

  move(): string {
    return "O leão corre pela savana!";
  }
}
