import { Company, Employee } from '../types';
import addEmployeeToCompany from './addEmployeeToCompany';

describe('addEmployeeToCompany', () => {
	it('should add an employee to the company', () => {
		const company: Company = {
			name: 'Test Company',
			employees: [],
		};
		const employee: Employee = {
			name: 'Test Employee',
		};

		const result = addEmployeeToCompany(company, employee);

		expect(result).toEqual({
			name: 'Test Company',
			employees: [employee],
		});
	});
});
