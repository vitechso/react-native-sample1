import * as React from 'react';
import HomeScreen from './screens/home';
import Dashboard from './screens/Dashboard';
import DetailsScreen from './screens/details'
import Listing from './screens/Listing'
import ListingInvoice from './screens/ListingInvoice'
import Invoice from './screens/Invoice'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Overview',headerShown:false }} component={HomeScreen} />
        <Stack.Screen name="Dashboard" options={{ title: 'Overview',headerShown:false }} component={Dashboard} />      
        <Stack.Screen name="ListingInvoice" options={{ title: 'Overview',headerShown:false }} component={ListingInvoice} />
        <Stack.Screen name="Listing" options={{ title: 'Overview',headerShown:false }} component={Listing} />
        <Stack.Screen name="Invoice" options={{ title: 'Overview',headerShown:true }} component={Invoice} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;