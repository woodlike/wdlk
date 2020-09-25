// tslint:disable: no-import-side-effect
import 'jest-axe/extend-expect';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

beforeEach(() => {
  expect.extend(matchers);
});
