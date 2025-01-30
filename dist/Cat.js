"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");

class Cat extends Animal_1.Animal {
    constructor(name, age, color) {
        super(name, age);
        this._color = color;
    }
    
    speak() {
        console.log(`${this.name} (a ${this._color} cat) meows: Meow! 🐱`);
    }
    
    hunt() {
        console.log(`${this.name} is hunting a mouse! 🐭`);
    }
}
exports.Cat = Cat;
