const tsJest = {
  '.(ts|tsx)': 'ts-jest',
}

module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    setupFiles: ['<rootDir>/testing-library-setup.ts'],
  },
  projects: [
    {
      displayName: 'dom',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testMatch: ['**/__tests__/**/*.test.ts?(x)'],
      transform: tsJest,
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      preset: 'ts-jest',
      testMatch: ['**/__tests__/**/*.test.node.ts?(x)'],
      transform: tsJest,
    },
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib'],
};
