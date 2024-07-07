import { EmployeeI } from '../types';
import EmployeeValidator from '../validation/EmployeeValidator';

type InitProps = EmployeeI;

type EmployeeImpl = {
	updateName(name: string): void;
	getDetails(): EmployeeI;
}

export default class Employee implements EmployeeImpl {
	private _name: string;
	private _age: number;

	constructor({ name, age }: InitProps) {
		this.validateName(name);
		this._name = name;

		this.validateAge(age);
		this._age = age;
	}

	public updateName(name: string) {
		this.validateName(name);
		this._name = name;
	}

	private validateAge(age: number) {
		new EmployeeValidator().validateAge(age);
	}

	private validateName(name: string) {
		new EmployeeValidator().validateName(name);
	}

	public getDetails() {
		return {
			name: this._name,
			age: this._age,
		};
	}
}
