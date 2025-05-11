import React from "react";

const transactions = [
  { day: "Mon 20", title: "Shopping", subtitle: "Weekly Groceries", amount: -320.43 },
  { day: "Tue", title: "Food & Drink", subtitle: "Smiley Face Restaurant", amount: -45.90 },
  { day: "Wed", title: "Salary", subtitle: "Company Inc.", amount: 2500.00 },
  { day: "Thu", title: "Transfer", subtitle: "To Savings", amount: -500.00 },
];

export default function TransactionList() {
  return (
    <div className="w-full bg-[var(--card-bg)] rounded-2xl p-4 mb-24" style={{boxShadow: 'var(--card-shadow)'}}>
      <div className="text-sm font-semibold text-[var(--primary-blue)] mb-2">Transactions History</div>
      <ul className="divide-y divide-[var(--gray-light)]">
        {transactions.map((t, i) => (
          <li key={i} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-[var(--primary-blue)] font-bold text-xs">
                {t.title[0]}
              </div>
              <div>
                <div className="text-xs font-semibold text-[var(--foreground)]">{t.title}</div>
                <div className="text-xs text-gray-400">{t.subtitle}</div>
              </div>
            </div>
            <div className={`text-sm font-bold ${t.amount < 0 ? 'text-[var(--danger-red)]' : 'text-[var(--success-green)]'}`}>
              {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 