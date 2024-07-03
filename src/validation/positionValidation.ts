import { Departments, Positions } from '../enums';

export const isPositionValidForDepartment = (
	position: Positions,
	department: Departments
): boolean => {
	switch (department) {
		case Departments.Engineering:
			return (
				position === Positions.SoftwareEngineer ||
				position === Positions.QualityAssuranceEngineer
			);
		case Departments.Marketing:
			return (
				position === Positions.ProductManager ||
				position === Positions.ContentCreator
			);
		case Departments.Sales:
			return (
				position === Positions.SalesAssociate ||
				position === Positions.CustomerSuccessManager
			);
		default:
			throw new Error('Invalid department');
	}
};
