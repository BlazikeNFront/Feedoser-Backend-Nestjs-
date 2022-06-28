export function roundTo2Decimals(numberToRound: number): number {
  return Math.round((numberToRound + Number.EPSILON) * 100) / 100;
}
