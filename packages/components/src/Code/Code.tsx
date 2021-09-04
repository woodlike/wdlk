/** @jsx jsx */

import * as Prism from "./__prism"

import React, { useMemo } from "react"
import { Theme, jsx, useTheme } from "@emotion/react"
import { convertor, normalizer } from "."

import { CSSConverter } from ".."
import { Token } from "prismjs"
import styled from "@emotion/styled"

export interface CodeProps {
  readonly code: string
  readonly size: "s" | "m" | "l"
  readonly lang: Language
  readonly theme?: PrismTheme
}

export interface PrismTheme {
  readonly plain: PrismStyleProp
  readonly styles: PrismStyleRule[]
}

export interface PrismStyleRule {
  readonly types: string[]
  readonly style: PrismStyleProp
}

export interface PrismStyleProp {
  readonly color: string
  readonly backgroundColor?: string
  readonly fontStyle?: "normal" | "italic"
  readonly fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
  readonly textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
  readonly opacity?: number
  readonly [styleKey: string]: string | number | void
}

interface StyledPreProps {
  readonly size: "s" | "m" | "l"
}

export enum Language {
  markup = "markup",
  bash = "bash",
  css = "css",
  cssExtras = "css-extras",
  clike = "clike",
  javascript = "javascript",
  jsx = "jsx",
  jsExtras = "js-extras",
  git = "git",
  graphql = "graphql",
  json = "json",
  ocaml = "ocaml",
  reason = "reason",
  tsx = "tsx",
  typescript = "typescript",
  yaml = "yaml",
}

const StyledPre = styled.pre<StyledPreProps>`
  width: 100%;
  padding: ${props => props.theme.space[4]}px;
  border-radius: 9px;
  margin: 0;
  font-family: ${props => props.theme.fonts.monospace};
  font-size: ${props => {
    const { size, theme } = props
    return !!theme.code[size] ? `${theme.code[size].fontSize}px` : ""
  }};
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
  color: ${props => props.theme.code.theme.plain.color};
  background-color: ${props => props.theme.code.theme.plain.backgroundColor};
`

StyledPre.displayName = "StyledPre"

const StyledCode = styled.code`
  font-family: inherit;
`

StyledCode.displayName = "StyledCode"

export function handleTokens(code: string, langs: Language): Token[] {
  const { languages, tokenize } = Prism.default
  const grammar = languages[langs]

  return normalizer(tokenize(code, grammar))
}

export const Code: React.FC<CodeProps> = props => {
  const { code } = useTheme() as Theme
  const tokens = handleTokens(props.code, props.lang)
  const theme = convertor(props.theme || code.theme)

  const MemoTokens = useMemo<JSX.Element>(() => {
    return (
      <React.Fragment>
        {tokens.map((token, i) => (
          <CSSConverter
            cssObject={theme.get(token.type)}
            key={`first-level-token-stream-${i}`}>
            {token.content}
          </CSSConverter>
        ))}
      </React.Fragment>
    )
  }, [tokens])

  return (
    <StyledPre size={props.size}>
      <StyledCode>{MemoTokens}</StyledCode>
    </StyledPre>
  )
}
