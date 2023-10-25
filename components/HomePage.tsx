import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useData } from '../hooks/useData';
import { FindButton } from './FindButton';
import { StackScreenProps } from '@react-navigation/stack';

type StackList = {
  Home: undefined;
  Results: undefined;
};

export default function HomePage({ navigation }: StackScreenProps<StackList, 'Home'>) {
  const [postCode, setPostCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fuel Find</Text>
      <Text>Enter PostCode</Text>
      <TextInput
        style={styles.input} 
        value={postCode}
        onChangeText={(text) => setPostCode(text)}
      />
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
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginTop: 10,
  },
});