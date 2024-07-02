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
} as const;
