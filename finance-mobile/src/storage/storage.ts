import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AppState } from '../types/types';

const STORAGE_KEY = 'finance_app_state_v1';

export async function loadAppState(): Promise<AppState | null> {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (!value) return null;
    return JSON.parse(value) as AppState;
  } catch (error) {
    console.warn('Failed to load state', error);
    return null;
  }
}

export async function saveAppState(state: AppState): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn('Failed to save state', error);
  }
}

export function createEmptyState(): AppState {
  return { accounts: [], transactions: [], budgets: [] };
}

export async function ensureSeededState(): Promise<AppState> {
  const existing = await loadAppState();
  if (existing) return existing;
  const seeded: AppState = {
    accounts: [
      { id: 'acc_checking', name: 'Compte courant', type: 'checking' },
      { id: 'acc_savings', name: 'Livret A', type: 'savings' },
      { id: 'acc_credit', name: 'Carte Crédit', type: 'credit' },
    ],
    transactions: [
      { id: 't1', accountId: 'acc_checking', amount: -42.5, date: new Date().toISOString(), description: 'Courses' },
      { id: 't2', accountId: 'acc_checking', amount: -12.9, date: new Date().toISOString(), description: 'Café' },
      { id: 't3', accountId: 'acc_checking', amount: 2500, date: new Date().toISOString(), description: 'Salaire' },
      { id: 't4', accountId: 'acc_savings', amount: 100, date: new Date().toISOString(), description: 'Épargne' },
    ],
    budgets: [
      { id: 'b1', name: 'Courses', amount: 400, period: 'monthly' },
      { id: 'b2', name: 'Sorties', amount: 150, period: 'monthly' },
    ],
  };
  await saveAppState(seeded);
  return seeded;
}