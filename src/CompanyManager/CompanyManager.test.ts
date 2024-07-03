import Company from '../Company/Company';
import { errorMessages } from '../constants';
import CompanyManager from './CompanyManager';

describe('CompanyManager', () => {
	it('init with an empty array for companies', () => {
		const companyManager1 = new CompanyManager();
		expect(companyManager1).toBeInstanceOf(CompanyManager);

		const companyManager2 = new CompanyManager();
		expect(companyManager2.companies).toEqual([]);
	});
	describe('add company', () => {
		it('check for company unique name', () => {
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
	it.todo("remove company by its name");
	it('get company by its name', () => {
		const companyManager = new CompanyManager();
		const company1 = new Company({ name: 'Company 1', maxEmployees: 10 });
		companyManager.add(company1);
		const company2 = new Company({ name: 'Company 2', maxEmployees: 10 });
		companyManager.add(company2);

		expect(companyManager.getCompanyByName('Company 1')).toEqual(company1);
		expect(companyManager.getCompanyByName('Company 2')).toEqual(company2);
		expect(companyManager.getCompanyByName('Company 3')).toBeUndefined();
	});
	it('list all companies', () => {
		const companyManager = new CompanyManager();
		const company1 = new Company({ name: 'Company 1', maxEmployees: 10 });
		companyManager.add(company1);
		const company2 = new Company({ name: 'Company 2', maxEmployees: 10 });
		companyManager.add(company2);

		expect(companyManager.companies).toEqual([company1, company2]);
	});
	it('get total number of companies', () => {
		const companyManager = new CompanyManager();
		const company1 = new Company({ name: 'Company 1', maxEmployees: 10 });
		companyManager.add(company1);
		const company2 = new Company({ name: 'Company 2', maxEmployees: 10 });
		companyManager.add(company2);

		expect(companyManager.totalCompanies).toEqual(2);
	});
});
