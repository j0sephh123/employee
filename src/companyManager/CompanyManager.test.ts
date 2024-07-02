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
});
