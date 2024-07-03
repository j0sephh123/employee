module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!src/generateMarkdown.ts"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};