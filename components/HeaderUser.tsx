import React from "react";

export default function HeaderUser() {
  return (
    <header className="flex items-center justify-between w-full bg-[var(--card-bg)] p-4 rounded-b-2xl shadow" style={{boxShadow: 'var(--card-shadow)'}}>
      <div>
        <div className="text-xs text-gray-400">Good Morning</div>
        <div className="text-lg font-bold text-[var(--primary-blue)]">Hi, Natalya Undergrowth</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-[var(--gray-light)] flex items-center justify-center">
        <span className="font-bold text-[var(--primary-blue)]">NU</span>
      </div>
    </header>
  );
} 