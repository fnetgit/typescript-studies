// Atividade 10/04/2025

import { Creature } from "./Creature";
import { Dragon } from "./Dragon";
import { Elf } from "./Elf";
import { Troll } from "./Troll";
import { BattleArena } from "./BattleArena";

const draco = new Dragon('Draco')
const legolas = new Elf('Legolas')
const grog = new Troll('Grog')

const arena = new BattleArena()
arena.addCreature(draco)
arena.addCreature(legolas)
arena.addCreature(grog)

console.log(arena.startBattle())
