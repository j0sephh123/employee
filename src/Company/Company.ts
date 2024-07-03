import { errorMessages } from '../constants';
import Employee from '../Employee/Employee';
import { CompanyI } from '../types';
import Validator, { Reasons } from '../validation/Validator';

const reasonMessages = {
	[Reasons.minLength]: errorMessages['company.name.tooShort'],
	[Reasons.maxLength]: errorMessages['company.name.tooLong'],
};

type P = {
	maxEmployees: number;
} & Pick<CompanyI, 'name'>;

export default class Company {
	private _name: string;
	private _employees: Employee[] = [];
	private _maxEmployees: number;

	constructor({ name, maxEmployees }: P) {
		this.validateName(name);
		this._name = name;
		this._maxEmployees = maxEmployees;
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
		if (this.employees.length >= this._maxEmployees) {
			throw new Error(errorMessages['company.employee.maxReached']);
		}

		const employeeExists = this.employees.find(e => e.details.name === employee.details.name);

		if (employeeExists) {
			throw new Error(errorMessages['company.employee.alreadyExists']);
		}

		this.employees.push(employee);

		return this.employees;
	}

	public removeEmployee(employee: Employee) {
		const employeesBefore = this._employees.length;
		this._employees = this._employees.filter(e => e.details.name !== employee.details.name);

		if (employeesBefore === this._employees.length) {
			throw new Error(errorMessages['company.employee.doesNotExist']);
		}

		if (this._employees.length === 0) {
			throw new Error(errorMessages['company.employee.atLeastOne']);
		}
	}

	public updateName(name: string) {
		this.validateName(name);
		this._name = name;
	}

	get employees() {
		return this._employees;
	}

	get totalEmployees() {
		return this._employees.length;
	}

	public getEmployeeByName(name: string) {
		return this._employees.find(e => e.details.name === name);
	}
}
