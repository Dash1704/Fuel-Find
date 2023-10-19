import { StyleSheet, Text, View } from 'react-native';
import { useData } from '../hooks/useData';

export default function ResultsPage() {
  const { fuelStations } = useData();
  return(
    <View>
      {fuelStations.map((station) => (
        <View key={station.Name}>
          <Text>{station.Name}</Text>
          {station.FuelPriceList.map((fuel) => (
            <Text key={fuel.FuelType}>
              {fuel.FuelType}: £{fuel.LatestRecordedPrice.InGbp} - Last Updated at: {fuel.LatestRecordedPrice.TimeRecorded}
            </Text>
          ))}
        </View>
        ))}
    </View>
  )
}