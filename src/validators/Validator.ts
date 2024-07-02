interface ValidatorI {
	validateField: (fieldValue: string) =>
		| {
				isValid: true;
		  }
		| {
				isValid: false;
				reason: Reasons;
		  };
}

export enum Reasons {
	minLength,
	maxLength,
}

// TODO - instantiating with name is not ideal, find a better way in 1 line
export default class Validator implements ValidatorI {
	private name: { min: number; max: number };

	constructor({ name }: { name: { min: number; max: number } }) {
		this.name = name;
	}

	validateField(fieldValue: string): ReturnType<ValidatorI['validateField']> {
		if (fieldValue.length < this.name.min) {
			return { isValid: false, reason: Reasons.minLength };
		}
		if (fieldValue.length > this.name.max) {
			return { isValid: false, reason: Reasons.maxLength };
		}
		return { isValid: true };
	}
}
