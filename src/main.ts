import { Dog } from './Dog'
import { Cat } from './Cat'


const dog = new Dog('Buddy', 3, 'Golden Retriever')
const cat = new Cat('Whiskers', 2, 'Black')


dog.speak() 
cat.speak() 


dog.doTrick() 
cat.hunt() 


console.log(`${dog.name} is ${dog.age} years old.`)
dog.age = 4
console.log(`${dog.name} is now ${dog.age} years old.`) 
