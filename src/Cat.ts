import { Animal } from './Animal'


export class Cat extends Animal {
	private _color: string

	constructor(name: string, age: number, color: string) {
		super(name, age)
		this._color = color
	}

	
	speak(): void {
		console.log(`${this.name} (a ${this._color} cat) meows: Meow! 🐱`)
	}

	
	hunt(): void {
		console.log(`${this.name} is hunting a mouse! 🐭`)
	}
}
