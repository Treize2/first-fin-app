import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { createEmptyState, loadAppState } from '../storage/storage';
import type { AppState, Budget } from '../types/types';

export default function BudgetsScreen() {
  const [state, setState] = useState<AppState>(createEmptyState());

  useEffect(() => {
    (async () => {
      const loaded = await loadAppState();
      if (loaded) setState(loaded);
    })();
  }, []);

  const renderBudget = ({ item }: { item: Budget }) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.period}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgets</Text>
      <FlatList
        data={state.budgets}
        keyExtractor={(b) => b.id}
        renderItem={renderBudget}
        ListEmptyComponent={<Text style={styles.empty}>Aucun budget</Text>}
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