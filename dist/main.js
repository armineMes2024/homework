"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Cat_1 = require("./Cat");

const dog = new Dog_1.Dog('Buddy', 3, 'Golden Retriever');
const cat = new Cat_1.Cat('Whiskers', 2, 'Black');

dog.speak(); 
cat.speak(); 

dog.doTrick(); 
cat.hunt(); 

console.log(`${dog.name} is ${dog.age} years old.`); 
dog.age = 4;
console.log(`${dog.name} is now ${dog.age} years old.`); 
