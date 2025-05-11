"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "../../components/BottomNav";
import FloatingActionButton from "../../components/FloatingActionButton";

const categories = [
  "Comptes et livrets",
  "Épargne long terme",
  "Immobilier et Bien d'usage",
  "Immobilier Locatif",
  "Investissement alternatif"
];

export default function AddPatrimoinePage() {
  const [category, setCategory] = useState(categories[0]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !value) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    // Stockage temporaire en localStorage pour la démo
    const newLine = { category, name, value };
    const existing = JSON.parse(localStorage.getItem("patrimoine_add") || "[]");
    localStorage.setItem("patrimoine_add", JSON.stringify([...existing, newLine]));
    router.push("/patrimoine");
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--background)] pb-20">
      <div className="w-full max-w-md bg-[var(--card-bg)] rounded-2xl shadow-lg p-6 mt-8 mb-4" style={{boxShadow: 'var(--card-shadow)'}}>
        <h1 className="text-2xl font-bold text-[var(--primary-blue)] mb-6">Ajouter un produit au patrimoine</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="text-xs text-gray-500">Catégorie
            <select className="w-full mt-1 p-2 rounded-lg border border-[var(--gray-light)] focus:outline-none focus:border-[var(--primary-blue)]" value={category} onChange={e => setCategory(e.target.value)}>
              {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
            </select>
          </label>
          <label className="text-xs text-gray-500">Nom du produit
            <input type="text" className="w-full mt-1 p-2 rounded-lg border border-[var(--gray-light)] focus:outline-none focus:border-[var(--primary-blue)]" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label className="text-xs text-gray-500">Valeur (€)
            <input type="number" min="0" step="0.01" className="w-full mt-1 p-2 rounded-lg border border-[var(--gray-light)] focus:outline-none focus:border-[var(--primary-blue)]" value={value} onChange={e => setValue(e.target.value)} />
          </label>
          {error && <div className="text-xs text-[var(--danger-red)] text-center">{error}</div>}
          <button type="submit" className="mt-2 bg-[var(--primary-blue)] text-white font-semibold py-2 rounded-lg shadow">Ajouter</button>
        </form>
      </div>
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
} 