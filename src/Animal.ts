export class Animal {
	protected _name: string 
	protected _age: number 

	constructor(name: string, age: number) {
		this._name = name
		this._age = age
	}

	
	get name(): string {
		return this._name
	}

	set name(value: string) {
		this._name = value
	}

	
	get age(): number {
		return this._age
	}

	set age(value: number) {
		if (value >= 0) {
			this._age = value
		} else {
			console.log('Age must be a positive number!')
		}
	}


	speak(): void {
		console.log(`${this.name} makes a sound.`)
	}
}
