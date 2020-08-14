export const calcSize = (fontSize: number, fontSizes: number[]): number =>
  fontSize < fontSizes.length ? fontSizes[fontSize] * 2.5 : fontSizes[0] * 2.5;
