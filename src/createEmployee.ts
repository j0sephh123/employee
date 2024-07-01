import employeeValidator from "./validators/employeeValidator";

export default function createEmployee(name: string) {
  const validationResult = employeeValidator.firstName(name);
  if (!validationResult.isValid) {
    throw new Error(validationResult.reason);
  }

  return {
    name,
  };
}
