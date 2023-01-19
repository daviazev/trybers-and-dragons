import Battle from './Battle';

import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(private _character1: Fighter, private _character2: Fighter) {
    super(_character1);
  }

  private lifePoinstValidation(): boolean {
    return this._character1.lifePoints > 0 && this._character2.lifePoints > 0;
  }

  fight(): number {
    while (this.lifePoinstValidation()) {
      this._character1.attack(this._character2);
      this._character2.attack(this._character1);
    }

    return super.fight();
  }
}
