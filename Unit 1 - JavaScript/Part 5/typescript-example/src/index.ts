const n: number = 42;
console.log(n);

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    // Returns string
    return this.name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const p = new Person("PEpe");
p.name = "Juan";
console.log(p.name);

function buscaArray(array: number[]): void {
  array.push(45);
}

buscaArray([35, 23]);

// Typing objects
let p2: {name: string, age: number};

