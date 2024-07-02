import { errorMessages } from '../constants';
import createCompany from './createCompany';

describe('createCompany', () => {
	it('should return correct error messages for name validation', () => {
		expect(() => createCompany('a')).toThrow(
			errorMessages['company.name.tooShort']
		);
		expect(() => createCompany('a'.repeat(21))).toThrow(
			errorMessages['company.name.tooLong']
		);
	});
	it('should return company object with correct name', () => {
		const company = createCompany('valid');
		expect(company.name).toBe('valid');
	});
});
