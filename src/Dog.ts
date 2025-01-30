import { Animal } from './Animal'


export class Dog extends Animal {
	private _breed: string

	constructor(name: string, age: number, breed: string) {
		super(name, age)
		this._breed = breed
	}

	
	speak(): void {
		console.log(`${this.name} (a ${this._breed}) barks: Woof! Woof!`)
	}

	
	doTrick(): void {
		console.log(`${this.name} is doing a backflip! 🤸‍♂️`)
	}
}
