import { errorMessages } from '../constants';
import Employee from '../employee/Employee';
import Validator, { Reasons } from '../validators/Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['company.name.tooShort'],
	[Reasons.maxLength]: errorMessages['company.name.tooLong'],
};

export default class Company {
	private _employees: Employee[] = [];

	constructor(public name: string) {
		const validator = new Validator({ name: { min: 2, max: 20 } });
		const validationResult = validator.validateName(name);
		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}

	public create() {
		return {
			name: this.name,
		};
	}

	public addEmployee(employee: Employee) {
		const employeeExists = this.employees.find(e => e.name === employee.name);

		if (employeeExists) {
			throw new Error(errorMessages['company.employee.alreadyExists']);
		}

		this.employees.push(employee);

		return this.employees;
	}

	get employees() {
		return this._employees;
	}
}
