export interface UtilityResult {
  personIndex: number;
  electricity: number;
  water: number;
  gas: number;
  total: number;
}

export interface UtilityInput {
  prices: {
    electricity: number;
    water: number;
    gas: number;
  };
  days: number[];
}
