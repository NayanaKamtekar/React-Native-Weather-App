import React, {useState, useEffect} from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import WeekList from './WeekComponents/WeekList';

export const WeeklyScreen = ({dailyWeather}) => {
  const backgroundImage = require('../../assets/background.jpg');
  return (
    
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Text style={styles.headerText}>Next 8 Days</Text>
        <WeekList timezone_offset={dailyWeather.timezone_offset} daily={dailyWeather.daily} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
  
  },  
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',     
  },
  headerText:{
    flex: 1,
    fontSize: 35,
    color: "darkslateblue",
    paddingTop: 15,
    paddingLeft: 10,
    fontWeight:'bold'
  }
})
