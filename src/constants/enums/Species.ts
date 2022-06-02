export const Species = {
  RAINBOW_TROUT: 'rainbowTrout',
  test: 'test',
  // SALMON,
  // BROOK_TROUT,
  // BROWN_TROUT,
  // WHITEFISH,
} as const;
export type SpeciesKeys = keyof typeof Species;
export type SpeciesValues = typeof Species[SpeciesKeys];
