"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");

class Dog extends Animal_1.Animal {
    constructor(name, age, breed) {
        super(name, age);
        this._breed = breed;
    }
    
    speak() {
        console.log(`${this.name} (a ${this._breed}) barks: Woof! Woof!`);
    }
    
    doTrick() {
        console.log(`${this.name} is doing a backflip! 🤸‍♂️`);
    }
}
exports.Dog = Dog;
