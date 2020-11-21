export function fix(digits: number, str: string): string {
  return parseFloat(str).toFixed(digits);
}
