import React from "react"
import styled from "@emotion/styled"

const StyledTableFrame = styled.table`
  width: 100%;
  border-collapse: collapse;
`
StyledTableFrame.displayName = "StyledTableFrame"

export const Frame = (props: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => (
  <StyledTableFrame>{props.children}</StyledTableFrame>
)

Frame.displayName = "Table.Frame"
