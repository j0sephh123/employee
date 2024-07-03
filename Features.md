### Positions and Departments Mapping

- **Engineering**
  - Software Engineer
- **Marketing**
  - Product Manager
- **Sales**
  - Sales Associate

### Updated Features with Rules

## Employee

- ✅ create
  - ✅ validate name for length `[2,20]`
  - ✅ validate age `[18,64]`
- ✅ modify name
  - ✅ validate name for length `[2,20]`
- 🛠️ add position
  - 🛠️ validate position from `Positions` enum
  - 🛠️ validate position is appropriate for the department - create a function
- 🛠️ add department
  - 🛠️ validate from predefined `Departments` enum

## Company

- ✅ create
  - ✅ validate name for length `[2,20]`
  - ✅ validate maximum employees `[1,100]`
  - 🛠️ init with `Departments` enum
- ✅ add employee
  - ✅ prevent duplicate employees
  - ✅ maximum employees - different for each company
  - 🛠️ validate employee's position is appropriate for the department
- ✅ remove employee
  - ✅ company should have at least 1 employee
- ✅ modify name
  - ✅ validate name for length `[2,20]`
- ✅ get total number of employees
- ✅ get employee details by name

## CompanyManager

- ✅ init with an empty array for companies
- ✅ add company
  - ✅ check for company unique name
- ✅ remove company
- ✅ get company by name
- ✅ list all companies
- ✅ get total number of companies
