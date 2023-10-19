import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useData } from '../hooks/useData';
import { FindButton } from './FindButton';
import { StackScreenProps } from '@react-navigation/stack';

type StackList = {
  Home: undefined;
  Results: undefined;
};

export default function HomePage({ navigation }: StackScreenProps<StackList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fuel Find</Text>

        <FindButton 
          title="Find Fuel Prices"
          onPress={() => {
            navigation.navigate('Results')
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