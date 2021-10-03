module.exports = {
  verbose: true,
  testURL: 'http://localhost',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  testEnvironment: 'jsdom',
  // collectCoverageFrom: ['src/js/**/*.js'],
};
