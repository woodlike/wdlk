import React from "react"

import { ReactText } from "react"
import styled from "@emotion/styled"

export interface VideoStageProps {
  readonly muted: boolean
  readonly video: JSX.Element
  readonly controls?: JSX.Element
  readonly height?: ReactText

  handleClick(): void
}

interface StyledStageContainer {
  readonly height: ReactText
}

const StyledStageContainer = styled.figure<StyledStageContainer>`
  position: relative;
  height: ${props => props.height};
  margin: 0;
`

StyledStageContainer.displayName = "Video.StyledStageContainer"

const StyledStageCaption = styled.figcaption`
  position: relative;
  color: ${props => props.theme.video.color};
`

StyledStageCaption.displayName = "Video.StyledStageCaption"

export const Stage = (
  props: React.PropsWithChildren<VideoStageProps>,
): JSX.Element => (
  <StyledStageContainer height={props.height ?? "100%"}>
    {props.video}
    <StyledStageCaption>
      {props.controls}
      {props.children}
    </StyledStageCaption>
  </StyledStageContainer>
)
