import { errorMessages } from '../constants';
import Employee from './Employee';

describe('Employee', () => {
	describe('init', () => {
		it('validate name', () => {
			expect(() => new Employee({ name: 'a', age: 18 })).toThrow(
				errorMessages['employee.name.tooShort']
			);
			expect(() => new Employee({ name: 'a'.repeat(21), age: 18 })).toThrow(
				errorMessages['employee.name.tooLong']
			);
		});
		it('validate age', () => {
			expect(() => new Employee({ name: 'valid', age: 17 })).toThrow(
				errorMessages['employee.age.tooYoung']
			);
			expect(() => new Employee({ name: 'valid', age: 66 })).toThrow(
				errorMessages['employee.age.tooOld']
			);
			expect(() => new Employee({ name: 'valid', age: 44 })).not.toThrow(
				errorMessages['employee.age.tooOld']
			);
		});
	});
	describe('details', () => {
		it('getDetails', () => {
			const employee = new Employee({ name: 'valid', age: 18 });
			expect(employee.getDetails()).toEqual({ name: 'valid', age: 18 });
		});
	});
	describe('update', () => {
		it('name', () => {
			const employee1 = new Employee({ name: 'initial', age: 30 });
			employee1.updateName('updated');
			expect(employee1.getDetails().name).toBe('updated');

			const employee2 = new Employee({ name: 'initial', age: 30 });
			expect(() => employee2.updateName('x')).toThrow(
				errorMessages['employee.name.tooShort']
			);
		});
	});
});
