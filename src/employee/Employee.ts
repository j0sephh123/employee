import { errorMessages } from '../constants';
import Validator, { Reasons } from '../validators/Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['employee.name.tooShort'],
	[Reasons.maxLength]: errorMessages['employee.name.tooLong'],
};

export default class Employee {
	private _name: string;

	constructor(name: string) {
		this.validateName(name);
		this._name = name;
	}

	private validateName(name: string) {
		const validator = new Validator({ name: { min: 2, max: 20 } });
		const validationResult = validator.validateName(name);
		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}

	get name() {
		return this._name;
	}

	
}
