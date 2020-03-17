/**@jsx jsx */
import * as Prism from './__prism';
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';

import { andromeda, convertor, Language, PrismTheme } from '.';
import { useThemeQuery } from '../query';
import { Token } from 'prismjs';

export interface CodeProps {
  code: string;
  size: CodeSize;
  lang: Language;
  theme?: PrismTheme;
}

export type CodeSize = 's' | 'm' | 'l';

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
  padding: 3,
  fontFamily: 'monospace',
  fontSize: handleCodeSize(size, qt),
  color: theme.plain.color,
  backgroundColor: theme.plain.backgroundColor,
});

export function handleTokens(code: string, langs: Language): Token[] {
  const { languages, tokenize } = Prism.default;
  const grammar = languages[langs];
  return tokenize(code, grammar) as Token[];
}

export const Code: React.FC<CodeProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  const tokens = handleTokens(props.code, props.lang);
  const tokenTheme = convertor(props.theme || andromeda);
  return (
    <pre sx={createStylesPre(props.size, qt, props.theme)}>
      <code>
        {tokens.map((token, i) =>
          token.type ? (
            <span key={`token-${i}`} sx={tokenTheme.get(token.type)}>
              {JSON.stringify(token.content)}
            </span>
          ) : (
            <span key={`token-${i}`}>{token}</span>
          ),
        )}
      </code>
    </pre>
  );
};

Code.displayName = 'Code';
