import React from "react";

interface PieData {
  label: string;
  value: number;
  color: string;
}

const data: PieData[] = [
  { label: "Assurance Vie", value: 45230, color: "#2e7d4f" },
  { label: "SCPI", value: 15000, color: "#a8d5ba" },
  { label: "Résidence principale", value: 320000, color: "#e6f4ea" },
  { label: "Livret A", value: 10200, color: "#7fc8a9" },
  { label: "Compte courant", value: 3200, color: "#b2dfdb" },
  { label: "Compte USD", value: 5000, color: "#388e3c" },
];

function getPieSegments(data: PieData[]) {
  const total = data.reduce((sum: number, d: PieData) => sum + d.value, 0);
  let acc = 0;
  return data.map((d: PieData) => {
    const start = acc;
    const value = d.value / total;
    acc += value;
    return {
      ...d,
      startAngle: start * 2 * Math.PI,
      endAngle: acc * 2 * Math.PI,
    };
  });
}

export default function PieChart() {
  const radius = 40;
  const center = 50;
  const segments = getPieSegments(data);

  function describeArc(startAngle: number, endAngle: number) {
    const x1 = center + radius * Math.cos(startAngle - Math.PI / 2);
    const y1 = center + radius * Math.sin(startAngle - Math.PI / 2);
    const x2 = center + radius * Math.cos(endAngle - Math.PI / 2);
    const y2 = center + radius * Math.sin(endAngle - Math.PI / 2);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`;
  }

  return (
    <div className="flex flex-col items-center">
      <svg width={100} height={100} viewBox="0 0 100 100">
        {segments.map((seg, i) => (
          <path
            key={i}
            d={describeArc(seg.startAngle, seg.endAngle)}
            fill={seg.color}
            stroke="#fff"
            strokeWidth={1}
          />
        ))}
      </svg>
      <div className="mt-2 flex flex-col gap-1">
        {data.map((d, i) => (
          <div key={i} className="flex items-center text-xs">
            <span className="inline-block w-3 h-3 rounded-full mr-2" style={{background:d.color}}></span>
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
} 