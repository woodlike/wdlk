import { keyframes } from "@emotion/react"

import styled from "@emotion/styled"
import React from "react"

export interface ControlProps {
  readonly size: number
  readonly muted: boolean
  readonly isPlaying: boolean
  readonly mutedIcon?: JSX.Element
  readonly loudIcon?: JSX.Element
  readonly playIcon?: JSX.Element
  readonly pauseIcon?: JSX.Element
  readonly onClick: React.MouseEventHandler<HTMLDivElement>
}

const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.25);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`

const StyledControlMuted = styled.div`
  display: inline-block;
  cursor: pointer;
  animation: ${heartbeat} 1.8s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition: color ${props => props.theme.transition.duration[0]}s linear;
  :hover {
    color: ${props => props.theme.video.controls.color};
    animation-play-state: paused;
  }
`

StyledControlMuted.displayName = "Video.StyledControlMuted"

const StyledControlLoud = styled.div`
  display: inline-block;
  cursor: pointer;
  transition: color ${props => props.theme.transition.duration[0]}s linear;
  :hover {
    color: ${props => props.theme.video.controls.color};
  }
`

StyledControlLoud.displayName = "Video.StyledControlLoud"

const StyledControlItem = styled.div`
  display: inline-block;
  cursor: pointer;
  padding-right: ${props => props.theme.space[2]}px;
`

StyledControlItem.displayName = "StyledControlPlay"

export const Controls = (
  props: React.PropsWithChildren<ControlProps>,
): JSX.Element => {
  return (
    <>
      {!!props.playIcon && (
        <StyledControlItem>
          {props.isPlaying ? props.pauseIcon : props.playIcon}
        </StyledControlItem>
      )}
      {props.muted ? (
        <StyledControlMuted onClick={props.onClick}>
          {props.mutedIcon}
        </StyledControlMuted>
      ) : (
        <StyledControlLoud onClick={props.onClick}>
          {props.loudIcon}
        </StyledControlLoud>
      )}
    </>
  )
}
