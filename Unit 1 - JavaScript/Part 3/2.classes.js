"use strict";

class Person {
    constructor(name = "Nobody", age = 0) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello! I'm ${this.name} (${this.age} years old)`);
    }
}

let p = new Person("John", 12);
let p2 = new Person();

console.log(p);
console.log(p2);
p.sayHello();