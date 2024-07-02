import { errorMessages } from '../constants';
import Employee from './Employee';

describe('Employee', () => {
	it('should validate name', () => {
		expect(() => new Employee({ name: 'a', age: 18 })).toThrow(
			errorMessages['employee.name.tooShort']
		);
		expect(() => new Employee({ name: 'a'.repeat(21), age: 18 })).toThrow(
			errorMessages['employee.name.tooLong']
		);
	});
	it('should validate age', () => {
		expect(() => new Employee({ name: 'valid', age: 17 })).toThrow(
			errorMessages['employee.age.tooYoung']
		);
		expect(() => new Employee({ name: 'valid', age: 66 })).toThrow(
			errorMessages['employee.age.tooOld']
		);
	});
	it('should return employee object with correct fields', () => {
		const employee = new Employee({ name: 'valid', age: 18 });
		expect(employee.name).toBe('valid');
		expect(employee.age).toBe(18);
	});
	it('should update the employee name correctly', () => {
		const employee1 = new Employee({ name: 'initial', age: 30 });
		employee1.updateName('updated');
		expect(employee1.name).toBe('updated');

		const employee2 = new Employee({ name: 'initial', age: 30 });
		expect(() => employee2.updateName('x')).toThrow(
			errorMessages['employee.name.tooShort']
		);
	});
});
