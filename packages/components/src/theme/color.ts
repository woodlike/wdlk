import { ThemeColorProps } from '.';

export const query = (colorQuery: string, color: ThemeColorProps, idx = 0): string | string[] => {
  const themeColor = color[colorQuery];
  if (Array.isArray(themeColor)) {
    return themeColor[idx];
  }
  return themeColor;
};
