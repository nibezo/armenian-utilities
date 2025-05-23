import { UtilityInput, UtilityResult } from "../types";

export function calculateUtilities({
  prices,
  days,
}: UtilityInput): UtilityResult[] {
  const sumDays = days.reduce((sum, day) => sum + day, 0);

  return days.map((personDays, index) => {
    const electricity = (prices.electricity * personDays) / sumDays;
    const water = (prices.water * personDays) / sumDays;
    const gas = (prices.gas * personDays) / sumDays;

    return {
      personIndex: index,
      electricity: Number(electricity.toFixed(2)),
      water: Number(water.toFixed(2)),
      gas: Number(gas.toFixed(2)),
      total: Number((electricity + water + gas).toFixed(2)),
    };
  });
}
