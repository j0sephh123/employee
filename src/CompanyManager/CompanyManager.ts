import Company from '../Company/Company';
import { errorMessages } from '../constants';

export default class CompanyManager {
	private _companies: Company[] = [];

	constructor() {
		this._companies = [];
	}

	get companies() {
		return this._companies;
	}

	public add(company: Company) {
		const foundCompany = this._companies.find(c => c.name === company.name);

		if (foundCompany) {
			throw new Error(errorMessages['companyManager.alreadyExists']);
		}
		this._companies.push(company);
	}

	public getCompanyByName(name: string) {
		return this._companies.find(c => c.name === name);
	}

	get totalCompanies() {
		return this._companies.length;
	}
}
