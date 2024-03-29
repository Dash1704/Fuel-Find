import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FuelList } from '../types';

interface ResultProps {
  station: FuelList;
}

export default function Result({ station }: ResultProps) {
  const formatBritishDate = (date: string) => {
    const dateOnly = date.split(' ')[0].split("/")
    const flipDayAndMonth = [dateOnly[0], dateOnly[1]] = [dateOnly[1], dateOnly[0], dateOnly[2]]
    return flipDayAndMonth.join("/")
  }

  const stationAddress = (street: string, suburb: string, town: string, postCode: string) => {
    return `${street}, ${suburb}, ${town}, ${postCode}`
  }

  return (
    <View style={styles.stationContainer}>
      <Text style={styles.stationName}>{station.Name}</Text>
      <Text style={styles.stationAddress}>{stationAddress(station.Street, station.Suburb, station.Town, station.Postcode)}</Text>
      {station.FuelPriceList.map((fuel) => (
        <Text key={fuel.FuelType} style={styles.fuelInfo}>
          {fuel.FuelType} - £{fuel.LatestRecordedPrice.InGbp} - {formatBritishDate(fuel.LatestRecordedPrice.TimeRecorded)}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stationContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
  },
  stationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stationAddress: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  fuelInfo: {
    fontSize: 14,
  },
});
