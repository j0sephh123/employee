import { errorMessages } from '../constants';
import Validator, { Reasons } from './Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['company.name.tooShort'],
	[Reasons.maxLength]: errorMessages['company.name.tooLong'],
} as const;

export default class CompanyValidator extends Validator {
	private _name: string;

	constructor(name: string) {
		super();
		this._name = name;
	}

	public validateName() {
		const validationResult = super.validateStringLength(this._name, 2, 20);

		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}
}
