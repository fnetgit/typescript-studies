export abstract class Animal {
  protected name: string;
  protected age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  abstract makeSound(): void;

  abstract move(): void;

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getSpecies(): string {
    return this.species;
  }

  setAge(age: number): void {
    this.age = age;
  }
}
