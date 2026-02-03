// src/api/cryptoApi.ts

import type { MarketData } from "../types/MarketData";

const BASE_URL = "https://api.binance.com/api/v3";

/**
 * Fetch historical Bitcoin price data from Binance
 * @param interval Binance interval (e.g. "1d", "1h")
 * @param limit Number of data points (max 1000)
 */
export async function fetchBitcoinData(
  interval: string = "1d",
  limit: number = 30
): Promise<MarketData[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/klines?symbol=BTCUSDT&interval=${interval}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch market data");
    }

    const rawData = await response.json();

    // Transform Binance Kline data into MarketData objects
    return rawData.map((item: any[]) => ({
      time: new Date(item[0]),
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
      volume: parseFloat(item[5]),
    }));
  } catch (error) {
    console.error("Error fetching Bitcoin data:", error);
    return [];
  }
}
