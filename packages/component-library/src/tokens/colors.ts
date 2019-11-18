
export interface ColorRecipeProps {
  readonly default: RGB;
  readonly inverted: RGB;
	readonly hover: RGB;
  readonly hoverInverted: RGB;
	readonly active?: RGB;
	readonly disabled?: RGB;
	readonly checked?: RGB;
}
export interface ColorProps {
  [key: string]: RGB;
}

export interface ColorRecipe {
  [key: string]: ColorRecipeProps;
}

export type RGB = [number, number, number];

export const color: ColorProps = {
  coral: [255, 113, 99],
  coralActive: [229, 85, 78],
  white: [255, 255, 255],
  whiteSmoke: [240, 246, 246]
}

export const recipe: ColorRecipe = {
  logo: {
    default: color.coral,
    hover: color.coralActive,
    active: color.coralActive,
    inverted: color.white,
    hoverInverted: color.whiteSmoke
  }
}
