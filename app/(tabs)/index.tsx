import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spinner } from '@/components/ui/spinner';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.spinnerCard}>
        <Spinner size="large" color="#38bdf8" />
        <ThemedText type="title" style={styles.title}>
          Loading
        </ThemedText>
        <ThemedText style={styles.caption}>
          Main screen spinner rendered with gluestack.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  spinnerCard: {
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 28,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
    opacity: 0.7,
  },
});
