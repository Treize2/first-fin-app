import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-end w-full py-4 px-2">
      <div className="w-9 h-9 rounded-full bg-[var(--secondary-green)] flex items-center justify-center">
        <span className="font-bold text-[var(--primary-green)]">JD</span>
      </div>
    </header>
  );
} 