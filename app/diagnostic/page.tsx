import BottomNav from "../../components/BottomNav";
import FloatingActionButton from "../../components/FloatingActionButton";
import DiagnosticCard from "../../components/DiagnosticCard";

const indicateurs = [
  {
    title: "Diversification",
    value: "8 / 10",
    description: "Votre patrimoine est bien diversifié",
    status: "success",
    mainBtn: "Voir votre répartition",
    secondaryBtn: "Diversifier votre patrimoine"
  },
  {
    title: "Risque",
    value: "3 / 7",
    description: "Votre exposition au risque est cohérente",
    status: "success",
    mainBtn: "Voir votre niveau de risque",
    secondaryBtn: "Faire le point avec votre conseiller"
  },
  {
    title: "Evolution",
    value: "11,38 %",
    description: "Vous souhaitez booster votre épargne ?",
    status: "success",
    mainBtn: "Suivre votre évolution",
    secondaryBtn: "Booster votre épargne"
  },
  {
    title: "IR",
    value: "13 010 €",
    description: "Votre impôt sur le revenu n'est pas optimisé",
    status: "danger",
    mainBtn: "Voir votre impôt",
    secondaryBtn: "Réduire votre impôt"
  },
  {
    title: "IFI",
    value: "0 €",
    description: "Vous n'êtes pas soumis à l'Impôt sur la Fortune Immobilière",
    status: "success",
    mainBtn: "Voir votre IFI"
  },
  {
    title: "Succession",
    value: "-",
    description: "Votre succession est à jour",
    status: "success",
    mainBtn: "Voir votre succession"
  },
  {
    title: "Retraite",
    value: "4 870 € / mois",
    description: "Vos revenus à la retraite semblent suffisants",
    status: "success",
    mainBtn: "Voir votre retraite",
    secondaryBtn: "Compléter vos revenus"
  },
  {
    title: "Endettement",
    value: "25 %",
    description: "Votre taux d'endettement est maîtrisé",
    status: "success",
    mainBtn: "Voir votre endettement"
  },
  {
    title: "Epargne",
    value: "15 000 €",
    description: "Votre épargne est en croissance",
    status: "success",
    mainBtn: "Voir votre épargne"
  },
  {
    title: "Budget",
    value: "2 000 € / mois",
    description: "Votre budget mensuel est équilibré",
    status: "success",
    mainBtn: "Voir votre budget"
  }
] as const;

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--background)] pb-20">
      <div className="w-full max-w-5xl px-2 py-6">
        <h1 className="text-2xl font-bold text-[var(--primary-blue)] mb-6">Diagnostic</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicateurs.map((ind, i) => (
            <DiagnosticCard key={i} {...ind} />
          ))}
        </div>
      </div>
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
} 