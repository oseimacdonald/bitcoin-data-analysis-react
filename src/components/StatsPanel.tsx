// src/components/StatsPanel.tsx

import type { MarketData } from "../types/MarketData";

interface StatsPanelProps {
  data: MarketData[];
  priceChange: number;
  trend: string;
}

export default function StatsPanel({
  data,
  priceChange,
  trend,
}: StatsPanelProps) {
  if (data.length === 0) {
    return <p>Loading market statistics...</p>;
  }

  const latestPrice = data[data.length - 1].close;

  function getInsight(): string {
    if (trend === "Uptrend" && priceChange > 0) {
      return "Market shows bullish momentum based on recent price movement.";
    }

    if (trend === "Downtrend" && priceChange < 0) {
      return "Market shows bearish momentum based on recent price movement.";
    }

    return "Market shows mixed or sideways behavior with no strong trend.";
  }

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "1.5rem",
      }}
    >
      <h2>Market Summary</h2>

      <p>
        <strong>Latest Price:</strong> ${latestPrice.toFixed(2)}
      </p>

      <p>
        <strong>Trend:</strong> {trend}
      </p>

      <p>
        <strong>Price Change:</strong>{" "}
        {priceChange.toFixed(2)}%
      </p>

      <p>
        <strong>Insight:</strong> {getInsight()}
      </p>
    </div>
  );
}
