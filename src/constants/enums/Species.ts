export const Species = {
  RAINBOW_TROUT: 'rainbowTrout',
  SALMON: 'salmon',
  BROOK_TROUT: 'brookTrout',
  WHITEFISH: 'whitefish',
  STURGEON: 'sturgeon',
} as const;
export type SpeciesKeys = keyof typeof Species;
export type SpeciesValues = typeof Species[SpeciesKeys];
