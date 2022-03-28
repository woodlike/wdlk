import { Theme } from "."

export interface ButtonVariant {
  readonly color: string
  readonly bg: string
  readonly disabled: string
}

export interface ButtonVariants {
  readonly primary: ButtonVariant
  readonly secondary: ButtonVariant
}

export type Variant = ButtonVariant
export type Variants = ButtonVariants

export type ThemeVariants = Pick<Theme, "buttons">

export function getKeyValue<T, K extends keyof T>(obj: T, key: K): T[K] | null {
  if (!(key in obj)) {
    return null
  }
  return obj[key]
}

export function getVariant(
  theme: ThemeVariants,
  key: keyof ThemeVariants,
  value: keyof Variants,
): Variant | null {
  const variants = getKeyValue<ThemeVariants, keyof ThemeVariants>(theme, key)
  return !!variants
    ? getKeyValue<Variants, keyof Variants>(variants, value)
    : null
}
