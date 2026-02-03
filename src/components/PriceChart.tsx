// src/components/PriceChart.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { MarketData } from "../types/MarketData";

interface PriceChartProps {
  data: MarketData[];
  ma7: number[];
  ma14: number[];
}

export default function PriceChart({
  data,
  ma7,
  ma14,
}: PriceChartProps) {
  // Combine price data with moving averages for charting
  const chartData = data.map((item, index) => ({
    time: item.time.toLocaleDateString(),
    price: item.close,
    ma7: ma7[index],
    ma14: ma14[index],
  }));

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Bitcoin Price & Moving Averages</h2>

      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            dot={false}
            name="BTC Close Price"
          />

          <Line
            type="monotone"
            dataKey="ma7"
            stroke="#82ca9d"
            dot={false}
            name="7-Day MA"
          />

          <Line
            type="monotone"
            dataKey="ma14"
            stroke="#ff7300"
            dot={false}
            name="14-Day MA"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
