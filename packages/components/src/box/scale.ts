export type ScaleDefinition = number | ScaleTuple | ScaleTriple | ScaleBox;
export type ScaleTuple = [number, number];
export type ScaleTriple = [number, number, number];
export type ScaleBox = [number, number, number, number];

export type Space = number | string;
export type SpaceDefinition = Space | SpaceTuple | SpaceTriple | SpaceBox;
export type SpaceTuple = [Space, Space];
export type SpaceTriple = [Space, Space, Space];
export type SpaceBox = [Space, Space, Space, Space];

export function getThemeScale(scale: ScaleDefinition, space: Space[]): SpaceDefinition {
  return Array.isArray(scale) ? (scale.map(value => space[value]) as ScaleDefinition) : space[scale];
}

// export function getColorScale(scale: SpaceDefinition, colors: ThemeColorProps, idx?: number): SpaceDefinition {
// qt: ThemeQuery
// }

export function handleSpace(space: SpaceDefinition): SpaceBox {
  if (Array.isArray(space)) {
    if (space.length === 2) {
      return [...space, ...space] as ScaleBox;
    }
    if (space.length === 3) {
      return [...space, space[1]] as ScaleBox;
    }
    return [...space] as ScaleBox;
  }
  return [space, space, space, space];
}

export const create = (scale: ScaleDefinition, space: Space[]): SpaceBox => handleSpace(getThemeScale(scale, space));

export const toCSSPixel = (box: SpaceBox): string => box.map(value => `${value}px`).join(' ');
export const toCSSString = (box: SpaceBox): string => box.map(value => `${value}`).join(' ');
