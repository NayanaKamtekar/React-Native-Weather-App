import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/components/HomeScreen';
import {WeeklyScreen} from './src/components/WeeklyScreen';
import TabBar from './src/components/TabBar';

const Tab = createBottomTabNavigator();

const App = () => {
  const [dailyWeather, setDailyWeather] = useState();

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Today"
          children={() => (<HomeScreen setDailyWeather={setDailyWeather} />)}
          initialParams={{icon: 'calendar-today'}}
        />
        <Tab.Screen
          name="Weekly"
          children={() => <WeeklyScreen dailyWeather={dailyWeather} />}
          initialParams={{icon: 'calendar-week'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
