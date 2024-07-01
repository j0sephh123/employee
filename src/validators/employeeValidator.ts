import { errorMessages } from "../constants";


const employeeValidator = {
	firstName(firstNameArg: string) {
		if (firstNameArg.length < 2) {
			return {
				isValid: false,
				reason: errorMessages['employee.name.tooShort']
			}
		}

		if (firstNameArg.length > 20) {
			return {
				isValid: false,
				reason: errorMessages['employee.name.tooLong']
			}
		}

		return {
			isValid: true
		}
	}
}

export default employeeValidator;