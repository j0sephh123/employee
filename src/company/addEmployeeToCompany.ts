import { Company, Employee } from '../types';

export default function addEmployeeToCompany(
	company: Company,
	employee: Employee
) {
	return {
		...company,
		employees: [...company.employees, employee],
	};
}
