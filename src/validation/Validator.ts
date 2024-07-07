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

	validateNumber: (
		num: number,
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
	min,
	max,
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

	validateNumber(
		num: number,
		min: number,
		max: number
	): ReturnType<ValidatorI['validateNumber']> {
		if (num < min) {
			return { isValid: false, reason: Reasons.min };
		}
		if (num > max) {
			return { isValid: false, reason: Reasons.max };
		}
		return { isValid: true };
	}
}
