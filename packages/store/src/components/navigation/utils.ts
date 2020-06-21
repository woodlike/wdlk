export const calcYPosition = (scales: string[]): number[] =>
  scales.map(scale => parseInt(scale.replace(/[a-z]/gi, '')) / 2);
