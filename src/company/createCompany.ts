import { errorMessages } from '../constants';
import Validator, { Reasons } from '../validators/Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['company.name.tooShort'],
	[Reasons.maxLength]: errorMessages['company.name.tooLong'],
};

export default function createCompany(name: string) {
	const validator = new Validator({ name: { min: 2, max: 20 } });
	const validationResult = validator.validateName(name);
	if (!validationResult.isValid) {
		const message = reasonMessages[validationResult.reason];
		throw new Error(message);
	}

	return {
		name,
	};
}
