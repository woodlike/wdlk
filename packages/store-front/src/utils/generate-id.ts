import shortid from 'shortid';

export function generateIds(n: number, result: string[] = []): string[] {
  if (!n || n < 1) {
    return result;
  }
  if (n > 0) {
    result.push(shortid.generate());
    return generateIds((n = n - 1), result);
  }
  return result;
}
