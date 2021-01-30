import React, {useState, useEffect} from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import WeekList from './WeekComponents/WeekList';

export const WeeklyScreen = ({dailyWeather}) => {
  

  console.log("======Weekly weather called=====");
  console.log(dailyWeather.timezone_offset)
  console.log(dailyWeather.daily[0].weather)
  console.log("=====Weekly weather end=====")
  const backgroundImage = require('../../assets/background.jpg');
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <WeekList timezone_offset={dailyWeather.timezone_offset} daily={dailyWeather.daily} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',    
  }
})
