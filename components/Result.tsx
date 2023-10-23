import React from 'react';
import { Text, View } from 'react-native';
import { FuelList } from '../types';

interface ResultProps {
  station: FuelList;
}

export default function Result({ station }: ResultProps) {
  return (
    <View>
      <Text>{station.Name}</Text>
      {station.FuelPriceList.map((fuel) => (
        <Text key={fuel.FuelType}>
          {fuel.FuelType}: £{fuel.LatestRecordedPrice.InGbp} - Last Updated at: {fuel.LatestRecordedPrice.TimeRecorded}
        </Text>
      ))}
    </View>
  );
}
