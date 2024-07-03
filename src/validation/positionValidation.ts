import { Departments, Positions } from '../enums';

export const isPositionValidForDepartment = (
	position: Positions,
	department: Departments
): boolean => {
	switch (department) {
		case Departments.Engineering:
			return position === Positions.SoftwareEngineer;
		case Departments.Marketing:
			return position === Positions.ProductManager;
		case Departments.Sales:
			return position === Positions.SalesAssociate;
		default:
			throw new Error('Invalid department');
	}
};
