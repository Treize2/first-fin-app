import React from "react";

const products = [
  { name: "Assurance Vie", value: 45230, currency: "EUR" },
  { name: "SCPI", value: 15000, currency: "EUR" },
  { name: "Résidence principale", value: 320000, currency: "EUR" },
  { name: "Livret A", value: 10200, currency: "EUR" },
  { name: "Compte courant", value: 3200, currency: "EUR" },
  { name: "Compte USD", value: 5000, currency: "USD" },
];

export default function CardList() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2 text-[var(--primary-green)]">Mes Produits Financiers</h2>
      <div className="flex flex-col gap-3">
        {products.map((prod, idx) => (
          <div key={idx} className="flex items-center justify-between bg-[var(--accent-green)] rounded-xl p-4 shadow-sm">
            <div>
              <div className="text-xs text-gray-500">{prod.name}</div>
            </div>
            <div className="text-lg font-bold text-[var(--primary-green)]">
              {prod.value.toLocaleString()} {prod.currency}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 