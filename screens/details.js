import * as React from 'react';
import { View, Text,Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    const item = route.params
    console.log(item)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }