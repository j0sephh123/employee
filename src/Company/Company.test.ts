import { errorMessages } from '../constants';
import Employee from '../Employee/Employee';
import Company from './Company';

describe('Company', () => {
	describe('init', () => {
		it('validate name', () => {
			expect(() => new Company({ name: 'a', maxEmployees: 5 })).toThrow(
				errorMessages['company.name.tooShort']
			);
			expect(
				() => new Company({ name: 'a'.repeat(21), maxEmployees: 5 })
			).toThrow(errorMessages['company.name.tooLong']);
		});
		it('validate maximum employees', () => {
			const company = new Company({ name: 'valid', maxEmployees: 5 });
			const createdCompany = company.create();
			expect(createdCompany.name).toBe('valid');
		});
	});
	describe('details', () => {
		it.todo('getDetails');
		it('update name', () => {
			const company1 = new Company({ name: 'initial', maxEmployees: 5 });
			company1.updateName('updated');
			expect(company1.name).toBe('updated');

			const company2 = new Company({ name: 'initial', maxEmployees: 5 });
			expect(() => company2.updateName('x')).toThrow(
				errorMessages['company.name.tooShort']
			);
		});
	});
	describe('departments', () => {
		it.todo('init');
		it.todo('add');
	});
	describe('employees', () => {
		it('get total number', () => {
			const company = new Company({ name: 'company', maxEmployees: 5 });
			const employee1 = new Employee({ name: 'valid1', age: 18 });
			company.addEmployee(employee1);
			const employee2 = new Employee({ name: 'valid2', age: 18 });
			company.addEmployee(employee2);

			expect(company.totalEmployees).toEqual(2);
		});
		it('get employee details by name', () => {
			const company = new Company({ name: 'company', maxEmployees: 5 });
			const employee1 = new Employee({ name: 'valid1', age: 18 });
			company.addEmployee(employee1);
			const employee2 = new Employee({ name: 'valid2', age: 18 });
			company.addEmployee(employee2);

			expect(company.getEmployeeByName('valid1')).toEqual(employee1);
			expect(company.getEmployeeByName('valid2')).toEqual(employee2);
			expect(company.getEmployeeByName('valid3')).toBeUndefined();
		});
		describe('add', () => {
			it.todo("validate employee's position is appropriate for the department");
			it('prevent duplicate employees', () => {
				const employee = new Employee({ name: 'valid', age: 18 });
				const company = new Company({ name: 'company', maxEmployees: 5 });
				const employees = company.addEmployee(employee);
				expect(employees).toEqual([employee]);
				expect(() => company.addEmployee(employee)).toThrow(
					errorMessages['company.employee.alreadyExists']
				);
			});
			it('maximum employees', () => {
				const company = new Company({ name: 'company', maxEmployees: 1 });
				const employee1 = new Employee({ name: 'valid1', age: 18 });
				company.addEmployee(employee1);

				const employee2 = new Employee({ name: 'valid2', age: 18 });

				expect(() => company.addEmployee(employee2)).toThrow(
					errorMessages['company.employee.maxReached']
				);
			});
		});
	});
	describe('removeEmployee', () => {
		it('should remove correctly, but a company should have at least 1 employee', () => {
			const employee1 = new Employee({ name: 'valid1', age: 18 });
			const employee2 = new Employee({ name: 'valid2', age: 18 });
			const company = new Company({ name: 'company', maxEmployees: 5 });
			company.addEmployee(employee1);
			company.addEmployee(employee2);

			expect(company.employees).toEqual([employee1, employee2]);

			company.removeEmployee(employee1);

			expect(company.employees).toEqual([employee2]);

			expect(() => company.removeEmployee(employee2)).toThrow(
				errorMessages['company.employee.atLeastOne']
			);
		});
		it('should throw error if employee does not exist', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({ name: 'company', maxEmployees: 5 });
			expect(() => company.removeEmployee(employee)).toThrow(
				errorMessages['company.employee.doesNotExist']
			);
		});
	});
});
