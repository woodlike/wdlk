export const query = (
  colorQuery: string,
  color: { readonly [key: string]: string | string[] },
  idx = 0,
): string | string[] => {
  const themeColor = color[colorQuery];
  if (Array.isArray(themeColor)) {
    return themeColor[idx];
  }
  return themeColor;
};
