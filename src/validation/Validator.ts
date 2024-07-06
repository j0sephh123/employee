type ValidatorI = {
	validateStringLength: (
		field: string,
		min: number,
		max: number
	) =>
		| {
				isValid: true;
		  }
		| {
				isValid: false;
				reason: Reasons;
		  };
};

export enum Reasons {
	minLength,
	maxLength,
}

export default class Validator implements ValidatorI {
	validateStringLength(
		field: string,
		min: number,
		max: number
	): ReturnType<ValidatorI['validateStringLength']> {
		if (field.length < min) {
			return { isValid: false, reason: Reasons.minLength };
		}
		if (field.length > max) {
			return { isValid: false, reason: Reasons.maxLength };
		}
		return { isValid: true };
	}
}
