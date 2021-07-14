import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [clima, SetClima] = useState("lluvioso");

  const callWeatherService = (status) => {
    SetClima(status);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Es un día {clima}</Text>
      <Text style={styles.button} onPress={() => callWeatherService('soleado')}>Convierte a soleado</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#ccc",
    fontSize: 32,
  },
  button: {
    color: "#eee",
    fontSize: 24,
  },
});
