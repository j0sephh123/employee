import { errorMessages } from '../constants';
import Employee from '../employee/Employee';
import Company from './Company';

describe('Company', () => {
	describe('initialization', () => {
		it('should return correct error messages for name validation', () => {
			expect(() => new Company({name:'a'})).toThrow(
				errorMessages['company.name.tooShort']
			);
			expect(() => new Company({name:'a'.repeat(21)})).toThrow(
				errorMessages['company.name.tooLong']
			);
		});
		it('should return company object with correct name', () => {
			const company = new Company({name:'valid'});
			const createdCompany = company.create();
			expect(createdCompany.name).toBe('valid');
		});
	});
	describe('addEmployee', () => {
		it('should add employee to company', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({name:'company'});
			const employees = company.addEmployee(employee);
			expect(employees).toEqual([employee]);
		});
		it('should throw error if employee already exists', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({name:'company'});
			company.addEmployee(employee);
			expect(() => company.addEmployee(employee)).toThrow(
				errorMessages['company.employee.alreadyExists']
			);
		});
	});
	describe('removeEmployee', () => {
		it('should remove employee from company', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({name:'company'});
			company.addEmployee(employee);
			company.removeEmployee(employee);
			expect(company.employees).toEqual([]);
		});
		it('should throw error if employee does not exist', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			const company = new Company({name:'company'});
			expect(() => company.removeEmployee(employee)).toThrow(
				errorMessages['company.employee.doesNotExist']
			);
		});
	});
});
