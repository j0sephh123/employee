import Company from '../company/Company';

export default class CompanyManager {
	private _companies: Company[] = [];

  constructor() {
    this._companies = [];
  }

  get companies() {
    return this._companies;
  }
}
