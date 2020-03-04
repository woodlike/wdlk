const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$';

module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    setupFiles: ['./testing-library-setup.ts'],
  },
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  snapshotSerializers: ['jest-emotion'],
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib'],
};
