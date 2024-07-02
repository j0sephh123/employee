# Goal

1. Have fun without strict requirements
2. Do not leave the code editor and terminal at least initially
3. Business logic should be pretty simple - managing employees. I don't want to have to think about that so I can only focus on code.

# Features

## Employee

- ✅ create
  - ✅ validate name for length `[2,20]`
  - ✅ age `[18,64]`
- ✅ modify name

## Company
- ✅ create
  - ✅ validate name for length `[2,20]`
  - 🛠️ should have a unique name
- ✅ add employee
  - ✅ prevent duplicate employees
  - ✅ maximum employees - different for each company
- ✅ remove employee
  - 🛠️ company should have at least 1 employee
- ✅ modify name

## CompanyManager
- ✅ init with an empty array for companies
- 🛠️ add
  - 🛠️ check for company unique name

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
