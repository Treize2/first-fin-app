import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { createEmptyState, ensureSeededState } from '../storage/storage';
import type { AppState } from '../types/types';

export default function TransactionsScreen() {
  const [state, setState] = useState<AppState>(createEmptyState());

  useEffect(() => {
    (async () => {
      const seeded = await ensureSeededState();
      setState(seeded);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={state.transactions}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.description ?? 'Sans libellé'}</Text>
            <Text style={styles.rowText}>{new Date(item.date).toLocaleDateString('fr-FR')}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Aucune transaction</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
  },
  rowText: { fontSize: 16 },
  empty: { color: '#6b7280' },
});