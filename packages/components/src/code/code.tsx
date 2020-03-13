/**@jsx jsx */
import * as Prism from 'prismjs';
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';

import { andromeda, PrismTheme } from '.';
import { useThemeQuery } from '../query';

export interface CodeProps {
  code: string;
  size: CodeSize;
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

export const Code: React.FC<CodeProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  handleTokens(props.code);
  return (
    <pre sx={createStylesPre(props.size, qt, props.theme)}>
      <code>{JSON.stringify(props)}</code>
    </pre>
  );
};

Code.displayName = 'Code';

export function handleTokens(code: string): void {}
