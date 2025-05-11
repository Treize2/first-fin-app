import React from "react";

export default function BalanceCard() {
  return (
    <div className="w-full bg-[var(--primary-blue)] rounded-2xl shadow-lg p-6 flex flex-col items-start mt-4 mb-4" style={{boxShadow: 'var(--card-shadow)'}}>
      <div className="text-white text-xs mb-1">Total Amount</div>
      <div className="text-2xl font-bold text-white mb-2">$2,673.09</div>
      <button className="bg-white text-[var(--primary-blue)] text-xs font-semibold px-4 py-1 rounded-full shadow">VIEW DETAIL</button>
    </div>
  );
} 