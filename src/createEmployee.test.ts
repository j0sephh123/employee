import { errorMessages } from "./constants";
import createEmployee from "./createEmployee";

describe("createEmployee", () => {
  it('should return correct error messages for name validation', () => {
    expect(() => createEmployee('a')).toThrow(errorMessages['employee.name.tooShort']);
    expect(() => createEmployee('a'.repeat(21))).toThrow(errorMessages['employee.name.tooLong']);
  });
  it('should return employee object with correct name', () => {
    const employee = createEmployee('valid');
    expect(employee.name).toBe('valid');
  });
});
