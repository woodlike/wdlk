export const getHeaderHeight = (scales: string[]): number[] =>
  scales.map(scale => parseInt(scale.replace(/[a-z]/gi, '')));
