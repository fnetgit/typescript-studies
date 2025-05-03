export abstract class Creature {
    protected name: string
    protected health: number
    protected attackPower: number
  
    constructor(name: string, health: number, attackPower: number) {
      this.name = name
      this.health = health
      this.attackPower = attackPower
    }
  
    abstract move(): string
  
    attack(target: Creature): string {
      target.defend(this.attackPower) // usa o método defend para encapsular o dano
      return `${this.name} atacou ${target.name} causando ${this.attackPower} de dano!`
    }
  
    // Sofrer dano ou algo do tipo faria mais sentido
    defend(amount: number): void {
      this.health -= amount
    }
  
    isAlive(): boolean {
      return this.health > 0
    }
  
    getName(): string {
      return this.name
    }
  
    getHealth(): number {
      return this.health
    }
  }
  