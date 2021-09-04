/* eslint-disable @typescript-eslint/no-empty-interface */
import "@emotion/react"
import { Theme as WDLKTheme } from "../theme/types"

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface Theme extends WDLKTheme {}
}
