import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/components/HomeScreen';
import { WeeklyScreen } from './src/components/WeeklyScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Weekly" component={WeeklyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   tab: {
//     fontSize: 18,
//     color: "#232363",
//   },
// });

export default App
