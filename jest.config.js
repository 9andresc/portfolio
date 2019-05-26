module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'json'],
  setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  verbose: false,
};
