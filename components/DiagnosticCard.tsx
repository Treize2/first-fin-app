import React from "react";

interface DiagnosticCardProps {
  title: string;
  value: string;
  description: string;
  status: "success" | "danger";
  mainBtn: string;
  secondaryBtn?: string;
}

export default function DiagnosticCard({ title, value, description, status, mainBtn, secondaryBtn }: DiagnosticCardProps) {
  return (
    <div className="bg-white border border-[var(--primary-blue)] rounded-xl p-6 flex flex-col items-center shadow-sm">
      <h2 className="text-lg font-bold text-[var(--primary-blue)] mb-2">{title}</h2>
      <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="mb-2">
        {status === "success" ? (
          <span className="inline-flex items-center text-[var(--primary-blue)]">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="var(--primary-blue)"/><path d="M6 10.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        ) : (
          <span className="inline-flex items-center text-red-500">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#ff3b30"/><path d="M10 6v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="10" cy="14" r="1" fill="#fff"/></svg>
          </span>
        )}
      </div>
      <div className="text-sm text-gray-500 mb-4 text-center">{description}</div>
      <button className="w-full bg-[var(--primary-blue)] text-white font-semibold py-2 rounded-lg mb-2 hover:bg-[var(--primary-blue-dark)] transition">{mainBtn}</button>
      {secondaryBtn && (
        <button className="w-full border border-[var(--primary-blue)] text-[var(--primary-blue)] font-semibold py-2 rounded-lg hover:bg-blue-50 transition">{secondaryBtn}</button>
      )}
    </div>
  );
} 