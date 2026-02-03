// src/analysis/priceChange.ts

import type { MarketData } from "../types/MarketData";

/**
 * Calculate percentage price change between first and last data point
 */
export function calculatePriceChange(data: MarketData[]): number {
  if (data.length < 2) return 0;

  const startPrice = data[0].close;
  const endPrice = data[data.length - 1].close;

  return ((endPrice - startPrice) / startPrice) * 100;
}

/**
 * Determine trend direction based on price movement
 */
export function determineTrend(data: MarketData[]): string {
  if (data.length < 2) return "Insufficient data";

  const start = data[0].close;
  const end = data[data.length - 1].close;

  if (end > start) return "Uptrend";
  if (end < start) return "Downtrend";
  return "Sideways";
}
