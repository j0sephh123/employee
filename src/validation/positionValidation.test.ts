import { isPositionValidForDepartment } from './positionValidation';
import { Departments, Positions } from '../enums';

describe('isPositionValidForDepartment', () => {
	it('should return true for Software Engineer in Engineering department', () => {
		expect(
			isPositionValidForDepartment(
				Positions.SoftwareEngineer,
				Departments.Engineering
			)
		).toBe(true);
	});

	it('should return false for Software Engineer in Marketing department', () => {
		expect(
			isPositionValidForDepartment(
				Positions.SoftwareEngineer,
				Departments.Marketing
			)
		).toBe(false);
	});

	it('should return true for Product Manager in Marketing department', () => {
		expect(
			isPositionValidForDepartment(
				Positions.ProductManager,
				Departments.Marketing
			)
		).toBe(true);
	});

	it('should return false for Product Manager in Sales department', () => {
		expect(
			isPositionValidForDepartment(Positions.ProductManager, Departments.Sales)
		).toBe(false);
	});

	it('should return true for Sales Associate in Sales department', () => {
		expect(
			isPositionValidForDepartment(Positions.SalesAssociate, Departments.Sales)
		).toBe(true);
	});

	it('should return false for Sales Associate in Engineering department', () => {
		expect(
			isPositionValidForDepartment(
				Positions.SalesAssociate,
				Departments.Engineering
			)
		).toBe(false);
	});

	it('should throw error when an invalid department is passed', () => {
		expect(() =>
			isPositionValidForDepartment(
				Positions.SoftwareEngineer,
				765 as Departments
			)
		).toThrow('Invalid department');
	});
});
