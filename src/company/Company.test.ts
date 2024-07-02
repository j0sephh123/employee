import { errorMessages } from '../constants';
import Employee from '../employee/Employee';
import Company from './Company';

describe('Company', () => {
	describe('initialization', () => {
		it('should return correct error messages for name validation', () => {
			expect(() => new Company('a')).toThrow(
				errorMessages['company.name.tooShort']
			);
			expect(() => new Company('a'.repeat(21))).toThrow(
				errorMessages['company.name.tooLong']
			);
		});
		it('should return company object with correct name', () => {
			const company = new Company('valid');
			const createdCompany = company.create();
			expect(createdCompany.name).toBe('valid');
		});
	});
	describe('addEmployee', () => {
		it('should add employee to company', () => {
			const employee = new Employee('valid');
			const company = new Company('company');
			const employees = company.addEmployee(employee);
			expect(employees).toEqual([employee]);
		});
		it('should throw error if employee already exists', () => {
			const employee = new Employee('valid');
			const company = new Company('company');
			company.addEmployee(employee);
			expect(() => company.addEmployee(employee)).toThrow(
				errorMessages['company.employee.alreadyExists']
			);
		});
	});
	describe('removeEmployee', () => {
		it('should remove employee from company', () => {
			const employee = new Employee('valid');
			const company = new Company('company');
			company.addEmployee(employee);
			company.removeEmployee(employee);
			expect(company.employees).toEqual([]);
		});
		it('should throw error if employee does not exist', () => {
			const employee = new Employee('valid');
			const company = new Company('company');
			expect(() => company.removeEmployee(employee)).toThrow(
				errorMessages['company.employee.doesNotExist']
			);
		});
	});
});
