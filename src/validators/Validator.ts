interface ValidatorI {
	validateName: (name: string) =>
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

export default class Validator implements ValidatorI {
	private name: { min: number; max: number };

	constructor({ name }: { name: { min: number; max: number } }) {
		this.name = name;
	}

	validateName(nameArg: string): ReturnType<ValidatorI['validateName']> {
		if (nameArg.length < this.name.min) {
			return { isValid: false, reason: Reasons.minLength };
		}
		if (nameArg.length > this.name.max) {
			return { isValid: false, reason: Reasons.maxLength };
		}
		return { isValid: true };
	}
}
