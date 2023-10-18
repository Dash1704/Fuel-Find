import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useData } from './hooks/useData';

export default function App() {
  const { fuelStations } = useData();
  return (
    <View style={styles.container}>
      <Text>Fuel Find</Text>
      {fuelStations.map((station) => (
        <Text key={station.Name}>{station.Name}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
