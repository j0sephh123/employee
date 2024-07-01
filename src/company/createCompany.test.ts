import createCompany from './createCompany';

describe('createCompany', () => {
	it('should create a company with the given name', () => {
		const name = 'My Company';
		const company = createCompany(name);
		expect(company.name).toBe(name);
	});
});
