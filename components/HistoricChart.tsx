import React from "react";

// Données fictives d'évolution du patrimoine global
const data = [
  350000, 370000, 390000, 410000, 420000, 430000, 450000, 470000, 480000, 500000, 510000, 520000
];

export default function HistoricChart() {
  // Génération des points pour le SVG
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 180 + 10;
    const y = 90 - ((v - min) / (max - min)) * 70;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="flex flex-col items-center w-full">
      <svg width={200} height={100} viewBox="0 0 200 100" className="mb-2">
        <polyline
          fill="none"
          stroke="#2e7d4f"
          strokeWidth={3}
          points={points}
        />
        <circle cx={10} cy={90 - ((data[0] - min) / (max - min)) * 70} r={3} fill="#2e7d4f" />
        <circle cx={190} cy={90 - ((data[data.length-1] - min) / (max - min)) * 70} r={3} fill="#2e7d4f" />
      </svg>
      <div className="flex justify-between w-full text-xs text-gray-500">
        <span>2023</span>
        <span>2024</span>
      </div>
      <div className="mt-1 text-xs text-[var(--primary-green)] font-semibold">Évolution du patrimoine global</div>
    </div>
  );
} 