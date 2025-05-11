import React from "react";

export default function PatrimoineChart() {
  return (
    <section className="mb-6 bg-[var(--card-bg)] rounded-xl p-4 shadow-sm flex flex-col items-center">
      <div className="mb-2 font-semibold text-[var(--primary-green)]">%45</div>
      <svg width="100" height="100" viewBox="0 0 36 36" className="mb-2">
        <circle cx="18" cy="18" r="16" fill="none" stroke="#e6f4ea" strokeWidth="4" />
        <circle cx="18" cy="18" r="16" fill="none" stroke="#2e7d4f" strokeWidth="4" strokeDasharray="45, 55" strokeLinecap="round" transform="rotate(-90 18 18)" />
      </svg>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center text-xs"><span className="inline-block w-3 h-3 rounded-full mr-2" style={{background:'#2e7d4f'}}></span>Electronic Market <span className="ml-auto font-semibold">1.40%</span></div>
        <div className="flex items-center text-xs"><span className="inline-block w-3 h-3 rounded-full mr-2" style={{background:'#a8d5ba'}}></span>Networking <span className="ml-auto font-semibold">12.4%</span></div>
        <div className="flex items-center text-xs"><span className="inline-block w-3 h-3 rounded-full mr-2" style={{background:'#e6f4ea'}}></span>Design Project <span className="ml-auto font-semibold">0.78%</span></div>
      </div>
    </section>
  );
} 