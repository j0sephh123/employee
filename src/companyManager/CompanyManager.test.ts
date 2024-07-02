import Company from '../company/Company';
import { errorMessages } from '../constants';
import CompanyManager from './CompanyManager';

describe('CompanyManager', () => {
	it('should be able to create a new instance', () => {
		const companyManager = new CompanyManager();
		expect(companyManager).toBeInstanceOf(CompanyManager);
	});

	it('should have an empty list of companies', () => {
		const companyManager = new CompanyManager();
		expect(companyManager.companies).toEqual([]);
	});

	it('should add a companny to the list', () => {
		const companyManager = new CompanyManager();
		const company1 = new Company({ name: 'Company 1', maxEmployees: 10 });
		companyManager.add(company1);
		expect(companyManager.companies).toEqual([company1]);

		const company2 = new Company({ name: 'Company 1', maxEmployees: 10 });
		expect(() => companyManager.add(company2)).toThrow(
			errorMessages['companyManager.alreadyExists']
		);
	});
});
