import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { createEmptyState, ensureSeededState } from '../storage/storage';
import type { AppState, Account } from '../types/types';

export default function AccountsScreen() {
  const [state, setState] = useState<AppState>(createEmptyState());

  useEffect(() => {
    (async () => {
      const seeded = await ensureSeededState();
      setState(seeded);
    })();
  }, []);

  const renderAccount = ({ item }: { item: Account }) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comptes</Text>
      <FlatList
        data={state.accounts}
        keyExtractor={(a) => a.id}
        renderItem={renderAccount}
        ListEmptyComponent={<Text style={styles.empty}>Aucun compte</Text>}
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