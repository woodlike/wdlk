import { Theme } from 'theme-ui';

export interface SpacePadding {
  readonly p?: SpaceBox | number;
  readonly px?: SpaceTuple | number;
  readonly py?: SpaceTuple | number;
}

export interface SpaceMargin {
  readonly m?: SpaceBox | number;
  readonly mx?: SpaceTuple | number;
  readonly my?: SpaceTuple | number;
}

export type SpaceDeclaration = SpacePadding | SpaceMargin;
export type StyleException = '';
export type SpaceTuple = [number, number];
export type SpaceBox = [number, number, number, number];
export type Space = SpaceBox | SpaceTuple | number;
export type SpaceBoxType = 'p' | 'm';
export type CSSSpaceProperty = 'padding' | 'margin';

export function createSpaceBox(props: SpacePadding | SpaceMargin): SpaceBox | StyleException {
  const result = Object.entries(props).filter(([key]) => key.includes('p') || key.includes('m'));
  return result.length > 0 ? result.sort().reduce(spaceBoxReducer, [0, 0, 0, 0]) : '';
}

export function spaceBoxReducer(acc: SpaceBox, [key, val]: [string, SpaceTuple | SpaceBox]): SpaceBox {
  if (key === 'px' || key === 'mx') {
    return overrideX(acc, val as SpaceTuple);
  }
  if (key === 'py' || key === 'my') {
    return overrideY(acc, val as SpaceTuple);
  }

  return !Array.isArray(val) && (key === 'p' || key === 'm')
    ? ((Array.from({ length: 4 }).map(() => val) as unknown) as SpaceBox)
    : ([...val] as SpaceBox);
}

export function overrideX(box: SpaceBox, val: SpaceTuple | number): SpaceBox {
  box.splice(1, 1, Array.isArray(val) ? val[0] : val);
  box.splice(3, 1, Array.isArray(val) ? val[1] : val);
  return [...box] as SpaceBox;
}

export function overrideY(box: SpaceBox, val: SpaceTuple | number): SpaceBox {
  box.splice(0, 1, Array.isArray(val) ? val[0] : val);
  box.splice(2, 1, Array.isArray(val) ? val[1] : val);
  return [...box] as SpaceBox;
}

export function getThemeScale(space: SpaceDeclaration, theme: Theme): SpaceDeclaration {
  if (!theme || !theme.space) {
    return space;
  }

  const { space: scale } = theme;
  return Object.entries(space).reduce(
    (acc: SpaceDeclaration, [key, val]: [string, SpaceTuple | SpaceBox]): SpaceDeclaration => {
      if (Array.isArray(val)) {
        const themedVal = val.map(v => (scale[v] ? scale[v] : v));
        return {
          ...acc,
          [key]: themedVal,
        };
      }
      return {
        ...acc,
        [key]: scale[val] ? scale[val] : val,
      };
    },
    {},
  );
}
