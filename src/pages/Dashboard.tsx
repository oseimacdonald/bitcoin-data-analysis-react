// src/pages/Dashboard.tsx

import { useEffect, useState } from "react";

import { fetchBitcoinData } from "../api/cryptoApi";
import { calculateMovingAverage } from "../analysis/movingAverage";
import {
  calculatePriceChange,
  determineTrend,
} from "../analysis/priceChange";

import StatsPanel from "../components/StatsPanel";
import PriceChart from "../components/PriceChart";

import type { MarketData } from "../types/MarketData";

export default function Dashboard() {
  const [data, setData] = useState<MarketData[]>([]);
  const [ma7, setMa7] = useState<number[]>([]);
  const [ma14, setMa14] = useState<number[]>([]);
  const [priceChange, setPriceChange] = useState<number>(0);
  const [trend, setTrend] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      const marketData = await fetchBitcoinData("1d", 30);

      if (marketData.length === 0) return;

      setData(marketData);
      setMa7(calculateMovingAverage(marketData, 7));
      setMa14(calculateMovingAverage(marketData, 14));
      setPriceChange(calculatePriceChange(marketData));
      setTrend(determineTrend(marketData));
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bitcoin Data Analysis Dashboard</h1>

      <StatsPanel
        data={data}
        priceChange={priceChange}
        trend={trend}
      />

      <PriceChart data={data} ma7={ma7} ma14={ma14} />
    </div>
  );
}
