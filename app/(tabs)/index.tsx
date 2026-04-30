import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spinner } from '@/components/ui/spinner';
import { PieChart } from "react-native-gifted-charts";

export default function HomeScreen() {
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // you can restrict: "application/pdf", "image/*", etc.
        copyToCacheDirectory: true,
        multiple: false,
      });
      console.log(result);
    } catch (error) {
      console.log("Error picking document:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.spinnerCard}>
        <Button title="Pick a document" onPress={pickDocument} />
        {file && (
          <>
            <ThemedText style={styles.caption}>Picked!!</ThemedText>
          </>
        )}
        <Spinner size="large" color="#38bdf8" />
        <ThemedText type="title" style={styles.title}>
          Loading
        </ThemedText>
        <ThemedText style={styles.caption}>
          Main screen spinner rendered with gluestack.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.spinnerCard}>
        <PieChart
          data={[{ value: 62, color: "#CBB4F3"}, { value: 38, color: "#EDE7F6" }]}
          donut
          radius={60}
        />
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
