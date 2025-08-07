export type AccountType = 'checking' | 'savings' | 'credit';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
}

export interface Transaction {
  id: string;
  accountId: string;
  amount: number; // negative for expenses, positive for income
  date: string; // ISO 8601
  description?: string;
}

export type BudgetPeriod = 'monthly' | 'weekly';

export interface Budget {
  id: string;
  name: string;
  amount: number; // spending limit for the period
  period: BudgetPeriod;
}

export interface AppState {
  accounts: Account[];
  transactions: Transaction[];
  budgets: Budget[];
}