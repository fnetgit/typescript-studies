import { Creature } from "./Creature";

export class BattleArena {
  private creatures: Creature[] = [];

  addCreature(creature: Creature): void {
    this.creatures.push(creature);
  }

  startBattle(): string[] {
    const logs: string[] = [];

    // Enquanto mais de uma criatura estiver viva, a batalha continua
    while (this.getAliveCreatures().length > 1) {
      const aliveCreatures = this.getAliveCreatures();

      const attackerIndex = Math.floor(Math.random() * aliveCreatures.length);
      // Aleatoriza um número entre 0 e 1, suponha que foi 0.5, aí ele multiplica pelo tamanho da
      // lista, suponhamos que seja 3 (gerando 0.5 x 3 = 1.5), aí o floor arredonda pra baixo,
      // gerando 1, entao vai pegar o elemento de índice 1.

      let defenderIndex: number;
      do {
        defenderIndex = Math.floor(Math.random() * aliveCreatures.length);
      } while (defenderIndex === attackerIndex);

      const attacker = aliveCreatures[attackerIndex];
      const defender = aliveCreatures[defenderIndex];

      logs.push(attacker.move());
      logs.push(attacker.attack(defender));

      if (!defender.isAlive()) {
        logs.push(defender.getName() + " foi derrotado!");

        // Atualiza a lista principal de criaturas, mantendo apenas as vivas
        this.creatures = this.getAliveCreatures();
      }
    }

    const winner = this.getAliveCreatures()[0];
    if (winner) {
      logs.push(winner.getName() + " foi a última criatura viva e venceu a batalha!");
    }

    return logs;
  }

  // Função auxiliar para pegar as criaturas vivas
  private getAliveCreatures(): Creature[] {
    const alive: Creature[] = [];
    for (let i = 0; i < this.creatures.length; i++) {
      if (this.creatures[i].isAlive()) {
        alive.push(this.creatures[i]);
      }
    }
    return alive;
  }
}
