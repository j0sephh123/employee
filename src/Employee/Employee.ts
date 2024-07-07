import { errorMessages } from '../constants';
import { EmployeeI } from '../types';
import EmployeeValidator from '../validation/EmployeeValidator';

type P = EmployeeI;

export default class Employee {
	private _name: string;
	private _age: number;

	constructor({ name, age }: P) {
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

	get details() {
		return {
			name: this._name,
			age: this._age,
		};
	}
}
