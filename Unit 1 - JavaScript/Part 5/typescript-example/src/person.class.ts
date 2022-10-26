export class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    // Returns string
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
