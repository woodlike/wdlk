import { Close, Facebook, Instagram, OnePercent } from "."

import React from "react"
import styled from "../styled"

export interface IconProps {
  readonly color: IconColor
  readonly name: IconName
  readonly size: IconSize
  readonly type?: IconType
  readonly onClick?: React.MouseEventHandler<SVGElement>
}

export interface StyledSVGIconProps {
  readonly color: IconColor
  readonly form: "square" | "rect"
  readonly size: IconSize
  readonly type: IconType
  readonly onClick?: React.MouseEventHandler<SVGElement>
}

export type IconType = "utility" | "highlight"

export enum IconSize {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
}

export type IconName = "close" | "facebook" | "instagram" | "onepercent"

export type IconColor = "primary" | "secondary"

export const getBaseIconSize = (size: IconSize): number => {
  switch (size) {
    case IconSize.xs:
      return 24
    case IconSize.s:
      return 64
    case IconSize.m:
      return 90
    case IconSize.l:
      return 120
  }
}

export const StyledSVGIcon = styled.svg<StyledSVGIconProps>`
  ${props =>
    props.form === "square"
      ? `
      width: ${getBaseIconSize(props.size)}px;
      height: ${getBaseIconSize(props.size)}px;
    `
      : `
      width: ${getBaseIconSize(props.size)}px;
      height: ${getBaseIconSize(props.size) / 2}px;
    `};
  color: ${props =>
    props.color === "primary"
      ? props.theme.colors[props.color]
      : props.theme.colors.blacks[0]};
  fill: ${props => (props.type === "utility" ? "none" : "currentColor")};
  stroke: ${props => (props.type === "utility" ? "currentColor" : "none")};
  stroke-width: ${props => (props.type === "utility" ? "1px" : "0")};
  transition: fill 500ms ease;
  pointer-events: auto;
  cursor: "pointer";
  :hover {
    fill: ${props => props.theme.colors.secondary};
  }
`

StyledSVGIcon.displayName = "StyledSVGIcon"

export const Icon: React.FC<IconProps> = props => {
  switch (props.name) {
    case "close":
      return (
        <Close onClick={props.onClick} size={props.size} color={props.color} />
      )
    case "facebook":
      return <Facebook size={props.size} color={props.color} />
    case "instagram":
      return <Instagram size={props.size} color={props.color} />
    case "onepercent":
      return <OnePercent size={props.size} color={props.color} />
  }
}
