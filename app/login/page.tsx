"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (code === "1487") {
      setError("");
      document.cookie = "auth=ok; path=/; max-age=86400";
      router.push("/");
    } else {
      setError("Code incorrect. Veuillez réessayer.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-xs bg-[var(--card-bg)] rounded-2xl shadow-lg p-6" style={{boxShadow: 'var(--card-shadow)'}}>
        <h1 className="text-2xl font-bold text-[var(--primary-blue)] mb-6 text-center">Connexion</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-xs text-gray-500">Code d'accès
            <input
              type="password"
              className="w-full mt-1 p-2 rounded-lg border border-[var(--gray-light)] focus:outline-none focus:border-[var(--primary-blue)] text-center text-lg tracking-widest"
              value={code}
              onChange={e => setCode(e.target.value)}
              autoFocus
              maxLength={8}
            />
          </label>
          {error && <div className="text-xs text-[var(--danger-red)] text-center">{error}</div>}
          <button type="submit" className="mt-2 bg-[var(--primary-blue)] text-white font-semibold py-2 rounded-lg shadow">Se connecter</button>
        </form>
      </div>
    </div>
  );
} 