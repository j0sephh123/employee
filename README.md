# Goal

1. Have fun without strict requirements
2. Do not leave the code editor and terminal at least initially
3. Business logic should be pretty simple - managing employees. I don't want to have to think about that so I can only focus on code.

# Features

Sure, here are the features in markdown format:

## Employee

- ✅ create
  - ✅ validate name for length `[2,20]`
  - ✅ validate age `[18,64]`
- ✅ modify name
  - ✅ validate name for length `[2,20]`
- 🛠️ add position
  - 🛠️ validate position for length `[2,30]`
- 🛠️ add department
  - 🛠️ validate department for length `[2,30]`

## Company

- ✅ create
  - ✅ validate name for length `[2,20]`
  - ✅ validate maximum employees `[1,100]`
- ✅ add employee
  - ✅ prevent duplicate employees
  - ✅ maximum employees - different for each company
- ✅ remove employee
  - ✅ company should have at least 1 employee
- ✅ modify name
  - ✅ validate name for length `[2,20]`
- 🛠️ get total number of employees
- 🛠️ get employee details by name

## CompanyManager

- ✅ init with an empty array for companies
- ✅ add company
  - ✅ check for company unique name
- ✅ remove company
- ✅ get company by name
- ✅ list all companies
- ✅ get total number of companies

# Tech

Nothing interesting here (for now)

- **Jest** - simply because I use it at work and want to become better at it

## Prevent commits when:

- ✅ < 100% test coverage
- 🛠️ eslint fails
- 🛠️ `any`

# Ideas

They are not mandatory, just want to have them somewhere

- generate documentation based on typescript

❌
✅
🛠️
