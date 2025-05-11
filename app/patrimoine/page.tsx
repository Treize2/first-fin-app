"use client";
import BottomNav from "../../components/BottomNav";
import FloatingActionButton from "../../components/FloatingActionButton";
import { useEffect, useState } from "react";

const basePatrimoineData = [
  {
    category: "Comptes et livrets",
    icon: "💳",
    products: [
      { name: "COMPTE Adrien", subtitle: "Caisse d'épargne Particuliers - Compte Courant", value: "97 471,31 €" },
      { name: "Compte Auto-entrepreneur", subtitle: "Qonto - Compte Courant", value: "0,00 €" },
      { name: "COMPTE Commun", subtitle: "Caisse d'épargne Particuliers - Compte Courant", value: "5 901,54 €" },
      { name: "Livret A", subtitle: "CAISSE D'EPARGNE - Livret A", value: "23 165,00 €" }
    ]
  },
  {
    category: "Épargne long terme",
    icon: "💰",
    products: [
      { name: "Compte Titre e-Toro", subtitle: "Compte Titres", value: "11,00 €" }
    ]
  },
  {
    category: "Immobilier et Bien d'usage",
    icon: "🏠",
    products: [
      { name: "Résidence principale", subtitle: "Maison individuelle", value: "1 200 000 €" }
    ]
  },
  {
    category: "Immobilier Locatif",
    icon: "🏢",
    products: [
      { name: "Appartement locatif Paris", subtitle: "T2 meublé", value: "500 000 €" }
    ]
  },
  {
    category: "Investissement alternatif",
    icon: "🌱",
    products: [
      { name: "SCPI Pierre Plus", subtitle: "SCPI", value: "30 000 €" },
      { name: "Crypto Wallet", subtitle: "Bitcoin, Ethereum", value: "20 000 €" }
    ]
  },
  {
    category: "Crédit",
    icon: "💸",
    products: [
      { name: "Crédit immobilier", subtitle: "Banque Populaire", value: "-100000 €" },
      { name: "Crédit conso", subtitle: "Cofidis", value: "-10000 €" }
    ]
  }
];

function sumCategory(products: { value: string }[]) {
  return products.reduce((sum, p) => {
    const n = parseFloat(p.value.replace(/\s/g, '').replace('€', '').replace(',', '.'));
    return sum + (isNaN(n) ? 0 : n);
  }, 0);
}

export default function PatrimoinePage() {
  const [patrimoineData, setPatrimoineData] = useState(basePatrimoineData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const added = JSON.parse(localStorage.getItem("patrimoine_add") || "[]");
      if (added.length) {
        const data = JSON.parse(JSON.stringify(basePatrimoineData));
        for (const line of added) {
          const cat = data.find((c: any) => c.category === line.category);
          if (cat) {
            cat.products.push({ name: line.name, subtitle: "Ajouté par l'utilisateur", value: parseFloat(line.value).toLocaleString("fr-FR", {minimumFractionDigits:2, maximumFractionDigits:2}) + " €" });
          }
        }
        setPatrimoineData(data);
      }
    }
  }, []);

  if (!isClient) return null;

  // Calculs dynamiques
  const creditCat = patrimoineData.find(cat => cat.category === "Crédit");
  const credit = creditCat ? sumCategory(creditCat.products) : 0;
  const brut = patrimoineData.filter(cat => cat.category !== "Crédit").reduce((sum, cat) => sum + sumCategory(cat.products), 0);
  const net = brut + credit;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--background)] pb-20">
      <div className="w-full max-w-5xl px-2 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center border border-[var(--gray-light)] shadow-sm">
            <div className="text-lg font-bold text-[var(--primary-blue)] mb-1">Patrimoine brut</div>
            <div className="text-2xl font-bold text-gray-800 mb-2">{brut.toLocaleString("fr-FR", {minimumFractionDigits:2, maximumFractionDigits:2})} €</div>
            <div className="text-xs text-green-500">Calculé dynamiquement</div>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-center border border-[var(--gray-light)] shadow-sm">
            <div className="text-lg font-bold text-red-500 mb-1">Crédit</div>
            <div className="text-2xl font-bold text-red-500 mb-2">{credit.toLocaleString("fr-FR", {minimumFractionDigits:2, maximumFractionDigits:2})} €</div>
            <div className="text-xs text-red-500">Calculé dynamiquement</div>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-center border border-[var(--gray-light)] shadow-sm">
            <div className="text-lg font-bold text-[var(--primary-blue)] mb-1">Patrimoine net</div>
            <div className="text-2xl font-bold text-gray-800 mb-2">{net.toLocaleString("fr-FR", {minimumFractionDigits:2, maximumFractionDigits:2})} €</div>
            <div className="text-xs text-green-500">Calculé dynamiquement</div>
          </div>
        </div>
        {patrimoineData.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl p-6 mb-6 border border-[var(--gray-light)] shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-lg font-bold text-[var(--primary-blue)]">{cat.category}</span>
              </div>
              <span className={`text-xl font-bold ${cat.category === "Crédit" ? "text-red-500" : "text-[var(--primary-blue)]"}`}>
                {sumCategory(cat.products).toLocaleString("fr-FR", {minimumFractionDigits:2, maximumFractionDigits:2})} €
              </span>
            </div>
            <ul>
              {cat.products.map((prod, j) => (
                <li key={j} className="flex items-center justify-between py-3 border-b last:border-b-0 border-[var(--gray-light)]">
                  <div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">{prod.name}</div>
                    <div className="text-xs text-gray-400 italic">{prod.subtitle}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold ${cat.category === "Crédit" ? "text-red-500" : "text-[var(--primary-blue)]"}`}>{prod.value}</span>
                    <button className="text-[var(--primary-blue)] hover:opacity-70" title="Voir le détail">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8"/><circle cx="10" cy="10" r="3"/></svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
} 