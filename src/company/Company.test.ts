import { errorMessages } from '../constants';
import Employee from '../employee/Employee';
import Company from './Company';

describe('Company', () => {
	describe('initialization', () => {
		it('should return correct error messages for name validation', () => {
			expect(() => new Company({ name: 'a', maxEmployees: 5 })).toThrow(
				errorMessages['company.name.tooShort']
			);
			expect(
				() => new Company({ name: 'a'.repeat(21), maxEmployees: 5 })
			).toThrow(errorMessages['company.name.tooLong']);
		});
		it('should return company object with correct name', () => {
			const company = new Company({ name: 'valid', maxEmployees: 5 });
			const createdCompany = company.create();
			expect(createdCompany.name).toBe('valid');
		});
	});
	describe('addEmployee', () => {
		it('should add employee to company', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({ name: 'company', maxEmployees: 5 });
			const employees = company.addEmployee(employee);
			expect(employees).toEqual([employee]);
		});
		it('should throw error if employee already exists', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({ name: 'company', maxEmployees: 5 });
			company.addEmployee(employee);
			expect(() => company.addEmployee(employee)).toThrow(
				errorMessages['company.employee.alreadyExists']
			);
		});
	});
	describe('removeEmployee', () => {
		it('should remove employee from company', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({ name: 'company', maxEmployees: 5 });
			company.addEmployee(employee);
			company.removeEmployee(employee);
			expect(company.employees).toEqual([]);
		});
		it('should throw error if employee does not exist', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({ name: 'company', maxEmployees: 5 });
			expect(() => company.removeEmployee(employee)).toThrow(
				errorMessages['company.employee.doesNotExist']
			);
		});
	});
	it('should update the company name correctly', () => {
		const company1 = new Company({ name: 'initial', maxEmployees: 5 });
		company1.updateName('updated');
		expect(company1.name).toBe('updated');

		const company2 = new Company({ name: 'initial', maxEmployees: 5 });
		expect(() => company2.updateName('x')).toThrow(
			errorMessages['company.name.tooShort']
		);
	});
	it('should throw error if max employees is reached', () => {
		const company = new Company({ name: 'company', maxEmployees: 1 });
		const employee1 = new Employee({ name: 'valid1', age: 18 });
		company.addEmployee(employee1);

		const employee2 = new Employee({ name: 'valid2', age: 18 });

		expect(() => company.addEmployee(employee2)).toThrow(
			errorMessages['company.employee.maxReached']
		);
	});
});
