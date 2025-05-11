"use client";
import React, { useState } from "react";
import PieChart from "./PieChart";
import HistoricChart from "./HistoricChart";

const slides = [
  { component: <PieChart />, label: "Répartition" },
  { component: <HistoricChart />, label: "Historique" },
];

export default function DashboardSlider() {
  const [index, setIndex] = useState(0);

  return (
    <section className="mb-6">
      <div className="bg-[var(--card-bg)] rounded-2xl shadow-lg p-6 flex flex-col items-center" style={{boxShadow: 'var(--card-shadow)'}}>
        {slides[index].component}
        <div className="flex justify-center gap-4 mt-4">
          {slides.map((slide, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-[var(--primary-green)]' : 'bg-[var(--accent-green)]'}`}
              onClick={() => setIndex(i)}
              aria-label={slide.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 