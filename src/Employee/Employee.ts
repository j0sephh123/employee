import { errorMessages } from '../constants';
import { EmployeeI } from '../types';
import Validator, { Reasons } from '../validation/Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['employee.name.tooShort'],
	[Reasons.maxLength]: errorMessages['employee.name.tooLong'],
};

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

	// TODO move to Validator class
	private validateAge(age: number) {
		if (age < 18) {
			throw new Error(errorMessages['employee.age.tooYoung']);
		}
		if (age > 65) {
			throw new Error(errorMessages['employee.age.tooOld']);
		}
	}

	private validateName(name: string) {
		const validator = new Validator({ name: { min: 2, max: 20 } });
		const validationResult = validator.validateField(name);
		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}

	get details() {
		return {
			name: this._name,
			age: this._age,
		};
	}
}
