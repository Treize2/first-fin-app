"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function FloatingActionButton() {
  const router = useRouter();
  return (
    <button
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 w-14 h-14 rounded-full bg-[var(--primary-blue)] flex items-center justify-center shadow-lg border-4 border-white text-white text-3xl font-bold"
      onClick={() => router.push("/add-patrimoine")}
      aria-label="Ajouter un produit au patrimoine"
    >
      +
    </button>
  );
} 