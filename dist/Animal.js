"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
  
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
        else {
            console.log('Age must be a positive number!');
        }
    }
   
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
exports.Animal = Animal;
