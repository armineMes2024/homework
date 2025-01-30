
class Animal {
	private _name: string

	constructor(name: string) {
		this._name = name
	}

	
	get name(): string {
		return this._name
	}

	set name(value: string) {
		this._name = value
	}

	
	speak(): void {
		console.log('Animal speaks')
	}
}


class Dog extends Animal {
	constructor(name: string) {
		super(name) 
	}

	
	speak(): void {
		console.log(`${this.name} says Woof! Woof!`)
	}
}


const dog = new Dog('Buddy')
console.log(dog.name) 
dog.speak() 


dog.name = 'Max'
console.log(dog.name) 
