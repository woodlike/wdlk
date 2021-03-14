import { SerializedStyles, css } from "@emotion/core"

import { Link } from "gatsby"
import { Theme } from "@wdlk/components"
import styled from "./styled"

type LinkSize = "xs" | "s" | "m" | "l" | "xl"

interface StyledLinkProps {
  readonly theme: Theme
  readonly size: LinkSize
  readonly as?: "a" | "span" | "button"
  readonly isActive?: boolean
  readonly color?: "primary" | "secondary" | "tertiary"
  readonly type?: "inline" | "block"
}

const stylesUnderline = (props: StyledLinkProps): SerializedStyles => css`
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 100%;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: ${props.type === "inline" || props.isActive
      ? "translate3d(100%, 0, 0)"
      : "none"};
    transition: transform ${props.theme.transition.duration[0]}s
      ${props.theme.transition.timing[0]};
  }
  ${!props.isActive &&
  `:hover {
      ::after {
        transform: ${
          props.type === "inline" ? "none" : "translate3d(100%, 0, 0)"
        };
      }
    }`}
`

/* TODO: Update Gatsby to remove GatsbyLink type error */
/* @ts-ignore */
export const GatsbyLink = styled(Link)<StyledPropsWithTheme>`
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  border: none;
  overflow: hidden;
  font-family: ${props => props.theme.link.fontFamily};
  font-size: ${props =>
    !!props.size ? `${props.theme.link[props.size].fontSize}px` : ""};
  color: ${props =>
    !!props.color
      ? props.theme.link.color[props.color].default
      : props.theme.link.color.primary.default};
  font-kerning: normal;
  text-decoration: none;
  line-height: ${props => props.theme.lineHeights[1]};
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  ${props => stylesUnderline(props)};

  :hover {
    color: ${props => {
      const { color, theme } = props
      return !!color
        ? theme.link.color[color].hover
        : theme.link.color.primary.hover
    }};
  }
`
GatsbyLink.displayName = "GatsbyLink"
