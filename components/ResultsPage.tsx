import { StyleSheet, Text, View } from 'react-native';
import { useData } from '../hooks/useData';

export default function ResultsPage() {
  const { fuelStations } = useData();
  return(
    <View>
      <Text>RESULTS PAGE</Text>
    </View>
  )
}