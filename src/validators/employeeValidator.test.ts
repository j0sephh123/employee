import { error } from "console";
import employeeValidator from "./employeeValidator";
import { errorMessages } from "../constants";

describe("employeeValidator", () => {
    it("should return an object with isValid property equal to false and reason property equal to 'First name must be at least 2 characters long'", () => {
        const result = employeeValidator.firstName("a");
        expect(result.isValid).toBe(false);
        expect(result.reason).toBe(errorMessages['employee.name.tooShort']);
    });

    it("should return an object with isValid property equal to false and reason property equal to 'First name must be at most 20 characters long'", () => {
        const result = employeeValidator.firstName("a".repeat(21));
        expect(result.isValid).toBe(false);
        expect(result.reason).toBe(errorMessages['employee.name.tooLong']);
    });

    it("should return an object with isValid property equal to true", () => {
        const result = employeeValidator.firstName("valid");
        expect(result.isValid).toBe(true);
    });
})