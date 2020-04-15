/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { Token } from 'prismjs';
import { useMemo, Fragment } from 'react';
import * as Prism from './__prism';

import { andromeda, convertor, normalizer, Language } from '.';
import { useThemeQuery } from '../theme/query';

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
  width: '100%',
  padding: 4,
  margin: 0,
  borderRadius: '9px',
  fontFamily: 'monospace',
  fontSize: handleCodeSize(size, qt),
  color: theme.plain.color,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  textAlign: 'left',
  backgroundColor: theme.plain.backgroundColor,
});

export function handleTokens(code: string, langs: Language): Token[] {
  const { languages, tokenize } = Prism.default;
  const grammar = languages[langs];

  return normalizer(tokenize(code, grammar));
}

export const Code: React.FC<CodeProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  const tokens = handleTokens(props.code, props.lang);
  const theme = convertor(props.theme || andromeda);

  const MemoTokens = useMemo<JSX.Element>(() => {
    return (
      <Fragment>
        {tokens.map((token, i) => {
          return (
            <span sx={theme.get(token.type)} key={`first-level-token-stream-${i}`}>
              {token.content}
            </span>
          );
        })}
      </Fragment>
    );
  }, [tokens]);
  return (
    <pre sx={createStylesPre(props.size, qt, props.theme)}>
      <code sx={stylesCode}>{MemoTokens}</code>
    </pre>
  );
};

Code.displayName = 'Code';
