import HeaderUser from "../components/HeaderUser";
import BalanceCard from "../components/BalanceCard";
import BarChart from "../components/BarChart";
import TransactionList from "../components/TransactionList";
import BottomNav from "../components/BottomNav";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] pb-20">
      <HeaderUser />
      <main className="max-w-md mx-auto px-2 pt-2">
        <BalanceCard />
        <BarChart />
        <TransactionList />
      </main>
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
}
