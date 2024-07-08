import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  // Fungsi increment yang di-memoize
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Fungsi decrement yang di-memoize
  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menghitung: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Tambah" onPress={increment} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Kurangi" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Menambahkan margin vertikal untuk memberi spasi antar tombol
  },
});

