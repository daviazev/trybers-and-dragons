import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
// import Character from '../Character';
import Monster from '../Monster';

export default class PVE extends Battle {
  constructor(
    private _character: Fighter, 
    private _monsters: Array<Monster | Fighter | SimpleFighter>,
  ) {
    super(_character);
  }

  private lifePoinstValidation(): boolean {
    const monstersLifePoints = this._monsters
      .some((monster) => monster.lifePoints > 0);

    return this._character.lifePoints > 0 && monstersLifePoints;
  }

  fight(): number {
    while (this.lifePoinstValidation()) {
      this._monsters.forEach((monster) => {
        this._character.attack(monster);
        monster.attack(this._character);
      });
    }

    return super.fight();
  }
}