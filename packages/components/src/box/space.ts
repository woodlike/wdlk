export type SpaceDefinition = number | SpaceTuple | SpaceTriple | SpaceBox;
export type SpaceTuple = [number, number];
export type SpaceTriple = [number, number, number];
export type SpaceBox = [number, number, number, number];
export type StyleException = '';

function getThemeSpace(space: SpaceDefinition, scale: number[]): SpaceDefinition {
  if (Array.isArray(space)) {
    return space.map(value => scale[value]) as SpaceDefinition;
  }
  return scale[space];
}

function handleSpace(padding: SpaceDefinition): SpaceBox {
  if (Array.isArray(padding)) {
    if (padding.length === 2) {
      return [...padding, ...padding] as SpaceBox;
    }
    if (padding.length === 3) {
      return [...padding, padding[1]] as SpaceBox;
    }
    return [...padding] as SpaceBox;
  }
  return [padding, padding, padding, padding];
}

export const create = (padding: SpaceDefinition, scale: number[]): SpaceBox =>
  handleSpace(getThemeSpace(padding, scale));

export const toCSSPixel = (box: SpaceBox): string => box.map(value => `${value}px`).join(' ');
