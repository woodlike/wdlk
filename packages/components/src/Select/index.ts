import React from "react"
import * as Frame from "./Frame"
import * as Item from "./Item"

interface Props  {
  Item: {
    (props: React.PropsWithChildren<Item.SelectTileProps>): JSX.Element
  }
  Frame: {
      (props: React.PropsWithChildren<Frame.SelectFrameProps>): JSX.Element
      displayName: string
  }
}

export const Select: Props = { ...Frame, ...Item }
