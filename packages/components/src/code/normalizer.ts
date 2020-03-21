import { Token } from 'prismjs';

export function normalizer(stream: (string | Token)[], type = 'plain'): Token[] {
  try {
    if (!Array.isArray(stream)) {
      throw Error('The provided token stream must be of type array returned by the Prism.tokenize(code, grammar)');
    }
  } catch (err) {
    console.error(`${err}`);
    return [];
  }
  return stream.reduce((acc: Token[], curr: string | Token) => {
    return acc.concat(
      typeof curr === 'object' && Array.isArray(curr.content)
        ? normalizer(curr.content, (type = curr.type))
        : createToken(curr, type),
    );
  }, []);
}

export const createToken = (token: Token | string, type: string): Token => ({
  ...(typeof token !== 'object' ? { type, content: token, alias: '', length: 0, greedy: false } : token),
});
