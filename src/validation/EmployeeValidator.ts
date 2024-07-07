import { errorMessages } from '../constants';
import Validator, { Reasons } from './Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['employee.name.tooShort'],
	[Reasons.maxLength]: errorMessages['employee.name.tooLong'],
	[Reasons.min]: errorMessages['employee.age.tooYoung'],
	[Reasons.max]: errorMessages['employee.age.tooOld'],
} as const;

export default class EmployeeValidator extends Validator {
	constructor() {
		super();
	}

	public validateName(name: string) {
		const validationResult = super.validateStringLength(name, 2, 20);

		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}

	public validateAge(age: number) {
		const validationResult = super.validateNumber(age, 18, 65);

		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}
}
