"use client";
import React from "react";
import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[var(--card-bg)] border-t border-[var(--gray-light)] flex justify-around items-center h-16 z-20 shadow-lg rounded-t-2xl" style={{boxShadow: 'var(--card-shadow)'}}>
      <Link href="/" className="flex flex-col items-center text-[var(--primary-blue)] focus:outline-none">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"/></svg>
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/patrimoine" className="flex flex-col items-center text-gray-400 focus:outline-none">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M3 10h18"/><path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2"/></svg>
        <span className="text-xs">Patrimoine</span>
      </Link>
      <div className="w-14"></div> {/* Espace pour le bouton flottant */}
      <Link href="/diagnostic" className="flex flex-col items-center text-gray-400 focus:outline-none">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        <span className="text-xs">Diagnostic</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-gray-400 focus:outline-none">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-6 8-6s8 2 8 6"/></svg>
        <span className="text-xs">Profile</span>
      </Link>
    </nav>
  );
} 