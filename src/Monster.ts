import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(protected _lifePoints = 85, private _strength = 83) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints - attackPoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}