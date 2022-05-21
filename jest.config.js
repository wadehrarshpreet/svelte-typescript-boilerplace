module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte', 'ts'],
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/jest-dom',
  ],
  testEnvironment: 'jsdom',
  clearMocks: true, // Automatically clear mock calls and instances before every test.
};
