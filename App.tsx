import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useData } from './hooks/useData';
import { FindButton } from './components/FindButton';

export default function App() {
  const { fuelStations } = useData();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fuel Find</Text>
        {/* {fuelStations.map((station) => (
        <View key={station.Name}>
          <Text>{station.Name}</Text>
          {station.FuelPriceList.map((fuel) => (
            <Text key={fuel.FuelType}>
              {fuel.FuelType}: £{fuel.LatestRecordedPrice.InGbp} - Last Updated at: {fuel.LatestRecordedPrice.TimeRecorded}
            </Text>
          ))}
        </View>
        ))} */}
        <FindButton 
          title="Find Fuel Prices"
          onPress={() => {
            console.log('button pressed')
          }}
        />
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
  headerText: {
    fontSize: 50,
    fontWeight: "800"
  }
});
