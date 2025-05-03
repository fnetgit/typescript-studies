import { Animal } from "./Animal";

export class Parrot extends Animal {
  constructor(
    name: string,
    age: number,
    species: string,
    private vocabulary: string[] = []
  ) {
    super(name, age, species);
  }

  makeSound(): string {
    return "Squawk!";
  }

  move(): string {
    return "O papagaio voa pela floresta!";
  }

  learnWord(...words: (string | string[])[]): void {
    for (const item of words) {
      if (Array.isArray(item)) {
        this.vocabulary.push(...item);
      } else {
        this.vocabulary.push(item);
      }
    }
    console.log(this.vocabulary);
  }

  forgetWord(...words: (string | string[])[]): void {
    for (const item of words) {
      const wordList = Array.isArray(item) ? item : [item];
      for (const word of wordList) {
        const index = this.vocabulary.indexOf(word);
        if (index !== -1) {
          this.vocabulary.splice(index, 1);
        }
      }
    }
  }

  speak(): string {
    const fraseIndex = Math.floor(Math.random() * this.vocabulary.length);
    return `O papagaio diz: ${this.vocabulary[fraseIndex]}`;
  }
}
