export function previous(current: number, length: number): number {
  return (current - 1 + length) % length;
}

export function next(current: number, length: number): number {
  return (current + 1 + length) % length;
}
