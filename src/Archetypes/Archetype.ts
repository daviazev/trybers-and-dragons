import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special: number;
  private _cost: number;
  constructor(
    private _name: string,
  ) {
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  /*
    A classe Archetype deve ter um método estático chamado 
    createdArchetypeInstances que retorna um number:

    Esse número corresponde à quantidade de instâncias criadas a 
    partir das classes estendidas da classe abstrata Archetype;

    Cada arquétipo terá seu número máximo de instâncias, que será 
    definido dentro de suas classes especializadas;
  */

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}
