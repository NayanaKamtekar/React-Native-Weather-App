import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/components/HomeScreen';
import {WeeklyScreen} from './src/components/WeeklyScreen';
import TabBar from './src/components/TabBar';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{icon: 'home'}}
        />
        <Tab.Screen
          name="Weekly"
          component={WeeklyScreen}
          initialParams={{icon: 'sun'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
