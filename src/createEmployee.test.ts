import createEmployee from "./createEmployee";

describe("createEmployee", () => {
  it('should return an object with a name property equal to "vankata"', () => {
    const employee = createEmployee();
    expect(employee.name).toBe("vankata");
  });
});
