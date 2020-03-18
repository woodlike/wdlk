/**@jsx jsx */
import * as Prism from './__prism';
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';

import { andromeda, convertor, Language, CodeTheme } from '.';
import { useThemeQuery } from '../query';
import { Token, TokenStream } from 'prismjs';

export interface PrismStyleProp {
  readonly color: string;
  readonly backgroundColor?: string;
  readonly fontStyle?: 'normal' | 'italic';
  readonly fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  readonly textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  readonly opacity?: number;
  readonly [styleKey: string]: string | number | void;
}

export interface PrismTheme {
  plain: PrismStyleProp;
  styles: PrismStyleRule[];
}

export interface PrismStyleRule {
  readonly types: string[];
  readonly style: PrismStyleProp;
}

export interface CodeProps {
  code: string;
  size: CodeSize;
  lang: Language;
  theme?: PrismTheme;
}

export interface TokenListProps {
  content: TokenStream;
  theme: CodeTheme;
}

export type CodeSize = 's' | 'm' | 'l';

const stylesCode: SxStyleProp = {
  fontFamily: 'monospace',
};

export const handleCodeSize = (size: CodeSize, qt: ThemeQuery): string => {
  switch (size) {
    case 's':
      return qt('fontSizes')(0);
    case 'm':
      return qt('fontSizes')(1);
    case 'l':
      return qt('fontSizes')(2);
  }
};

const createStylesPre = (size: CodeSize, qt: ThemeQuery, theme = andromeda): SxStyleProp => ({
  padding: 4,
  margin: 0,
  borderRadius: '9px',
  fontFamily: 'monospace',
  fontSize: handleCodeSize(size, qt),
  color: theme.plain.color,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  backgroundColor: theme.plain.backgroundColor,
});

export function handleTokens(code: string, langs: Language): Token[] {
  const { languages, tokenize } = Prism.default;
  const grammar = languages[langs];
  return tokenize(code, grammar) as Token[];
}

export const TokenList: React.FC<TokenListProps> = (props): JSX.Element => (
  <Fragment>
    {Array.isArray(props.content) &&
      props.content.map((token, idx) => (
        <span key={`list-tokens--${idx}`} sx={props.theme.get((token as Token).type)}>
          {JSON.stringify((token as Token).content)}
        </span>
      ))}
  </Fragment>
);

TokenList.displayName = 'TokenList';

export const Code: React.FC<CodeProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  const tokens = handleTokens(props.code, props.lang);
  const theme = convertor(props.theme || andromeda);
  return (
    <pre sx={createStylesPre(props.size, qt, props.theme)}>
      <code sx={stylesCode}>
        {tokens.map((token, i) => {
          console.log(tokens);
          return token.type ? (
            Array.isArray(token.content) ? (
              <TokenList key={`generated-token--${i}`} content={token.content} theme={theme} />
            ) : (
              <span key={`generated-token--${i}`} sx={theme.get(token.type)}>
                {typeof token.content === 'string' && token.content}
              </span>
            )
          ) : (
            <span key={`generated-token--${i}`}>{token}</span>
          );
        })}
      </code>
    </pre>
  );
};

Code.displayName = 'Code';
