import { SerializedStyles, css } from "@emotion/react"

import { Theme } from "."

export const createFocusStyles = (theme: Theme): SerializedStyles => css`
  :focus {
    outline-offset: ${theme.outline.offset};
    outline-style: ${theme.outline.style};
    outline-width: ${theme.outline.width};
    outline-color: ${theme.outline.color};
  }
`
