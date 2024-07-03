import { Departments, Positions } from './enums';

export const errorMessages = {
	'employee.name.tooShort': 'Employee name is too short',
	'employee.name.tooLong': 'Employee name is too long',
	'employee.age.tooYoung': 'Employee is too young',
	'employee.age.tooOld': 'Employee is too old',

	'company.name.tooShort': 'Company name is too short',
	'company.name.tooLong': 'Company name is too long',
	'company.employee.alreadyExists': 'Employee already exists in company',
	'company.employee.doesNotExist': 'Employee does not exist in company',
	'company.employee.maxReached':
		'Company has reached maximum number of employees',
	'company.employee.atLeastOne': 'Company must have at least one employee',

	'companyManager.alreadyExists': 'Company already exists',
} as const;

export const positionsLabels = {
	[Positions.SoftwareEngineer]: 'Software Engineer',
	[Positions.ProductManager]: 'Product Manager',
	[Positions.SalesAssociate]: 'Sales Associate',
} as const;

export const departmentsLabels = {
	[Departments.Engineering]: 'Engineering',
	[Departments.Marketing]: 'Marketing',
	[Departments.Sales]: 'Sales',
} as const;
