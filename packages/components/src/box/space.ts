import { Theme } from 'theme-ui';

export interface SpacePadding {
  readonly p?: SpaceBox | number;
  readonly px?: SpaceTuple | number;
  readonly py?: SpaceTuple | number;
}

export type SpaceDefinition = number | SpaceTuple | SpaceTriple | SpaceBox;
export type SpaceTuple = [number, number];
export type SpaceTriple = [number, number, number];
export type SpaceBox = [number, number, number, number];
export type StyleException = '';

export type SpaceDeclaration = SpacePadding;
export type Space = SpaceBox | SpaceTuple | number;
export type SpaceBoxType = 'p';
export type CSSSpaceProperty = 'padding';

function getThemeSpace(space: SpaceDefinition, scale: number[]): SpaceDefinition {
  if (Array.isArray(space)) {
    return space.map(value => scale[value]) as SpaceDefinition;
  }
  return scale[space];
}

function handleSpace(space: SpaceDefinition): SpaceBox {
  if (Array.isArray(space)) {
    if (space.length === 2) {
      return [...space, ...space] as SpaceBox;
    }
    if (space.length === 3) {
      return [...space, space[1]] as SpaceBox;
    }
    return [...space] as SpaceBox;
  }
  return [space, space, space, space];
}

export function create(space: SpaceDefinition, scale: number[] | undefined): SpaceBox {
  if (!scale) {
    return handleSpace(space);
  }
  return handleSpace(getThemeSpace(space, scale));
}

export function createSpaceBox(props: SpacePadding): SpaceBox | StyleException {
  const result = Object.entries(props).filter(([key]) => key.includes('p'));
  console.log(result);
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
        return {
          ...acc,
          [key]: val.map(v => (scale[v] ? scale[v] : v)),
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
