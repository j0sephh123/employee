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
		if (age < 18) {
			throw new Error(errorMessages['employee.age.tooYoung']);
		}
		if (age > 65) {
			throw new Error(errorMessages['employee.age.tooOld']);
		}
	}

	private validateName(name: string) {
		new EmployeeValidator(name).validateName();
	}

	get details() {
		return {
			name: this._name,
			age: this._age,
		};
	}
}
