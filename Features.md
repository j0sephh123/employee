### Positions and Departments Mapping

- **Engineering**
  - Software Engineer
- **Marketing**
  - Product Manager
- **Sales**
  - Sales Associate

### Updated Features with Rules

## Employee

- ✅ init
  - ✅ validate name
  - ✅ validate age
- 🛠️ details
  - 🛠️ getDetails
- ✅ update
  - ✅ validate name for length `[2,20]`

## Company

- ✅ init
  - ✅ validate name
  - ✅ validate maximum employees
- 🛠️ details
  - 🛠️ getDetails
  - ✅ update name
- 🛠️ departments
  - 🛠️ init
  - 🛠️ add
- 🛠️ employees
  - ✅ add
    - ✅ prevent duplicate employees
    - ✅ maximum employees
    - 🛠️ validate employee's position is appropriate for the department
  - ✅ remove
    - ✅ should remove correctly, but a company should have at least 1 employee
    - ✅ should throw an error if employee does not exist
  - ✅ update name
    - ✅ validate name for length `[2,20]`
  - ✅ get total number
  - ✅ get employee details by name
  - 🛠️ assign position
    - 🛠️ use `Positions` enum
    - 🛠️ validate position is appropriate for the department - ✅ create a function

## CompanyManager

- ✅ init with an empty array for companies
- ✅ add company
  - ✅ check for company unique name
- 🛠️ remove company by its name
- ✅ get company by its name
- ✅ list all companies
- ✅ get total number of companies
