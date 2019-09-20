const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  preset: 'ts-jest',
  globals: {
		'ts-jest': {
			diagnostics: false,
			tsConfig: {
				esModuleInterop: true
			}
		}
	}
}
