import { errorMessages } from '../constants';
import Employee from './Employee';

describe('Employee', () => {
	it('should return correct error messages for name validation', () => {
		expect(() => new Employee('a')).toThrow(
			errorMessages['employee.name.tooShort']
		);
		expect(() => new Employee('a'.repeat(21))).toThrow(
			errorMessages['employee.name.tooLong']
		);
	});
	it('should return employee object with correct name', () => {
		const employee = new Employee('valid');
		expect(employee.name).toBe('valid');
	});
});
  