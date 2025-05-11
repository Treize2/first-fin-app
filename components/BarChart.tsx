import React from "react";

const data = [
  1200, 900, 1500, 1100, 1700, 1300, 1600, 1400
];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export default function BarChart() {
  const max = Math.max(...data);
  return (
    <div className="w-full bg-[var(--card-bg)] rounded-2xl p-4 flex flex-col items-center mb-4" style={{boxShadow: 'var(--card-shadow)'}}>
      <svg width={240} height={60} className="mb-2">
        {data.map((v, i) => (
          <rect
            key={i}
            x={i * 28 + 10}
            y={60 - (v / max) * 50}
            width={16}
            height={(v / max) * 50}
            rx={6}
            fill="var(--primary-blue)"
            opacity={i === 4 ? 1 : 0.5}
          />
        ))}
      </svg>
      <div className="flex w-full justify-between text-xs text-gray-400">
        {months.map((m, i) => (
          <span key={i} className={i === 4 ? "text-[var(--primary-blue)] font-bold" : ""}>{m}</span>
        ))}
      </div>
    </div>
  );
} 