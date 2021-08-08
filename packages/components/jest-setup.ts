// tslint:disable: no-import-side-effect
import "jest-axe/extend-expect"
import "@testing-library/jest-dom/extend-expect"

import { matchers } from "@emotion/jest"

beforeEach(() => {
  expect.extend(matchers)
})
