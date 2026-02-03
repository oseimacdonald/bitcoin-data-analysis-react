// src/analysis/movingAverage.ts

import type { MarketData } from "../types/MarketData";

/**
 * Calculate simple moving average (SMA)
 * @param data Market data array
 * @param period Number of periods for the average
 */
export function calculateMovingAverage(
  data: MarketData[],
  period: number
): number[] {
  const result: number[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      result.push(NaN);
      continue;
    }

    const slice = data.slice(i - period + 1, i + 1);
    const sum = slice.reduce((acc, item) => acc + item.close, 0);
    result.push(sum / period);
  }

  return result;
}
