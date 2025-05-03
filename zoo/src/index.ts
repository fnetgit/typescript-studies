// Praticando dia 30/04/2025

import { Lion } from "./Lion";
import { Parrot } from "./Parrot";

const words = ["Oi", "Olá", "Tudo bem?", "Como vai?"];

const papa = new Parrot("junin", 7, "papagaio");
papa.learnWord(words);
papa.forgetWord("Oi");
console.log(papa.speak());
