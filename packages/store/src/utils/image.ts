import { ProductImageWidth, SourceSetProps } from '../gatsby';

function lazyAddWidths(sets: typeof ProductImageWidth) {
  const sizes = Object.keys(sets);
  const addWidth = (sources: SourceSetProps[]) =>
    sources.reduce((acc, set, idx) => acc.concat(`${set} ${sizes[idx]}w,`), '');
  return addWidth;
}

export const addSrcsetDescriptor = lazyAddWidths(ProductImageWidth);

export function createSrcSets(srcSets: SourceSetProps[]): string {
  const sizes = Object.keys(ProductImageWidth);
  return srcSets.reduce(
    (acc, set, idx) => acc.concat(`${set} ${sizes[idx]}w,`),
    '',
  );
}