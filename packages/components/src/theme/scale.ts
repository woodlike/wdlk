export interface ScaledColorProps {
  color: string;
  idx: number;
}

export type Scale = string | number;
export type ScaleBox = [Scale, Scale, Scale, Scale];
export type ScaleArea = number | [number, number] | [number, number, number] | [number, number, number, number];

export function getThemeScale(area: ScaleArea, scale: Scale[]): Scale | Scale[] {
  return Array.isArray(area) ? area.map(value => scale[value]) : scale[area];
}

export function createBox(scale: Scale | Scale[]): ScaleBox {
  if (Array.isArray(scale)) {
    if (scale.length === 2) {
      return [...scale, ...scale] as ScaleBox;
    }
    if (scale.length === 3) {
      return [...scale, scale[1]] as ScaleBox;
    }
    return [...scale] as ScaleBox;
  }
  return [scale, scale, scale, scale];
}

export const create = (area: ScaleArea, scale: Scale[]): ScaleBox => createBox(getThemeScale(area, scale));

export const toCSSPixel = (box: ScaleBox): string => box.map(value => `${value}px`).join(' ');
export const toCSSString = (box: ScaleBox): string => box.map(value => `${value}`).join(' ');
