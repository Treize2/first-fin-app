"use client";
import BottomNav from "../../components/BottomNav";
import FloatingActionButton from "../../components/FloatingActionButton";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  function handleLogout() {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--background)] pb-20">
      <div className="w-full max-w-md bg-[var(--card-bg)] rounded-2xl shadow-lg p-6 mt-8 mb-4" style={{boxShadow: 'var(--card-shadow)'}}>
        <h1 className="text-2xl font-bold text-[var(--primary-blue)] mb-6">Mon Profil</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col items-center mb-4">
            <div className="w-20 h-20 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-3xl font-bold text-[var(--primary-blue)] mb-2">NU</div>
            <button type="button" className="text-xs text-[var(--primary-blue)] underline">Changer l'avatar</button>
          </div>
          <label className="text-xs text-gray-500">Nom
            <input type="text" className="w-full mt-1 p-2 rounded-lg border border-[var(--gray-light)] focus:outline-none focus:border-[var(--primary-blue)]" defaultValue="Natalya Undergrowth" />
          </label>
          <label className="text-xs text-gray-500">Email
            <input type="email" className="w-full mt-1 p-2 rounded-lg border border-[var(--gray-light)] focus:outline-none focus:border-[var(--primary-blue)]" defaultValue="natalya@email.com" />
          </label>
          <button type="submit" className="mt-4 bg-[var(--primary-blue)] text-white font-semibold py-2 rounded-lg shadow">Enregistrer</button>
        </form>
        <button onClick={handleLogout} className="mt-8 w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-red-600 transition">Déconnexion</button>
      </div>
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
} 