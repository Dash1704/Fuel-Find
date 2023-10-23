import { View } from 'react-native';
import { useData } from '../hooks/useData';
import Result from './Result';

export default function ResultsPage() {
  const { fuelStations } = useData();
  const searchResults = fuelStations.slice(0, 3);
  return(
    <View>
      {searchResults.map((station) => (
         <Result key={station.Name} station={station} />
      ))}
    </View>
  )
}
