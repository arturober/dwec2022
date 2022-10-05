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

class User extends Person {
    constructor(name, age, user, pass) {
        super(name, age);
        this.user = user;
        this.pass = pass;
    }
}

let user = new User("John", 54, "john123", "password");
console.log(user);
user.sayHello();

