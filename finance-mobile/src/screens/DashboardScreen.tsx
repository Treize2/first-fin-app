import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { createEmptyState, ensureSeededState } from '../storage/storage';
import type { AppState, Account, Transaction } from '../types/types';

export default function DashboardScreen() {
  const [state, setState] = useState<AppState>(createEmptyState());

  useEffect(() => {
    (async () => {
      const seeded = await ensureSeededState();
      setState(seeded);
    })();
  }, []);

  const totalBalance = state.accounts.reduce((sum, a) => sum + balanceForAccount(a, state.transactions), 0);
  const recent = [...state.transactions].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de bord</Text>
      <Text style={styles.balanceLabel}>Solde total</Text>
      <Text style={styles.balance}>{formatAmount(totalBalance)}</Text>

      <Text style={styles.section}>Transactions récentes</Text>
      <FlatList
        data={recent}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.description ?? 'Sans libellé'}</Text>
            <Text style={[styles.rowText, item.amount < 0 ? styles.expense : styles.income]}>
              {formatAmount(item.amount)}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Aucune transaction</Text>}
      />
    </View>
  );
}

function balanceForAccount(account: Account, transactions: Transaction[]): number {
  return transactions
    .filter((t) => t.accountId === account.id)
    .reduce((sum, t) => sum + t.amount, 0);
}

function formatAmount(value: number): string {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  balanceLabel: {
    color: '#6b7280',
  },
  balance: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
  section: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
  },
  rowText: {
    fontSize: 16,
  },
  expense: {
    color: '#dc2626',
  },
  income: {
    color: '#16a34a',
  },
  empty: {
    color: '#6b7280',
  },
});