import { errorMessages } from '../constants';
import Validator, { Reasons } from './Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['company.name.tooShort'],
	[Reasons.maxLength]: errorMessages['company.name.tooLong'],
} as const;

export default class CompanyValidator extends Validator {
	constructor() {
		super();
	}

	public validateName(name: string) {
		const validationResult = super.validateStringLength(name, 2, 20);

		if (!validationResult.isValid) {
			// Ensure validationResult.reason is a key in reasonMessages
			const message =
				reasonMessages[validationResult.reason as keyof typeof reasonMessages];
			throw new Error(message);
		}
	}
}
