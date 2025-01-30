"use strict";

class Animal {
    constructor(name) {
        this._name = name;
    }
    
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    
    speak() {
        console.log('Animal speaks');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
   
    speak() {
        console.log(`${this.name} says Woof! Woof!`);
    }
}

const dog = new Dog('Buddy');
console.log(dog.name); 
dog.speak(); 

dog.name = 'Max';
console.log(dog.name); 
