import { errorMessages } from '../constants';
import Employee from '../employee/Employee';
import { CompanyI } from '../types';
import Validator, { Reasons } from '../validators/Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['company.name.tooShort'],
	[Reasons.maxLength]: errorMessages['company.name.tooLong'],
};

type P = Pick<CompanyI, 'name'>;

export default class Company {
	private _name: string;
	private _employees: Employee[] = [];

	constructor({ name }: P) {
		this.validateName(name);
		this._name = name;
	}

	private validateName(name: string) {
		const validator = new Validator({ name: { min: 2, max: 20 } });
		const validationResult = validator.validateField(name);
		if (!validationResult.isValid) {
			const message = reasonMessages[validationResult.reason];
			throw new Error(message);
		}
	}

	get name() {
		return this._name;
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

	public removeEmployee(employee: Employee) {
		const employeesBefore = this._employees.length;
		this._employees = this._employees.filter(e => e.name !== employee.name);

		if (employeesBefore === this._employees.length) {
			throw new Error(errorMessages['company.employee.doesNotExist']);
		}
	}

	get employees() {
		return this._employees;
	}
}
