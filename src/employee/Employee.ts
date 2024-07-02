import { errorMessages } from '../constants';
import Validator, { Reasons } from '../validators/Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['employee.name.tooShort'],
	[Reasons.maxLength]: errorMessages['employee.name.tooLong'],
};

export default class Employee {
	constructor(public name: string) {
		const validator = new Validator({ name: { min: 2, max: 20 } });
		const validationResult = validator.validateName(name);
		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}
}
