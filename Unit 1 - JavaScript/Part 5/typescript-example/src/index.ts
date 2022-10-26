import { Person } from "./person.class";
import { Product } from "./product.interface";
import { Rectangle } from "./rectangle.class";

const n: number = 42;
console.log(n);

const p: Person = new Person("Pepe");
p.name = "Juan";
console.log(p.name);

function updateArray(array: number[]): void {
  array.push(45);
}

updateArray([35, 23]);

// Typing objects
const product: { name: string, price: number} = {
  name: "Keyboard",
  price: 34
};

const product2: Product = { // Better (using interfaces)
  name: "Keyboard",
  price: 34
};

console.log(product, product2);

function operar(
  n1: number, 
  n2: number, 
  op: (n1: number, n2: number) => number
): number {
  return op(n1, n2);
}

console.log(operar(4, 5, (n1: number, n2: number) => n1 + n2));

function sayHello(name?: string) {
  if(!name) {
    console.log("Hello World!");
  } else {
    console.log(`Hello ${name}`);
  }
}

sayHello();
sayHello("Peter");


const r = new Rectangle(6, 4);
console.log(r.getArea());