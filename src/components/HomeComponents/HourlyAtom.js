import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const HourlyAtom = ({time, temp, iconName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${iconName}@2x.png`,
        }}
        style={styles.weatherImg}
      />
      <Text style={styles.text}>{temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 5,
    flex: 1,
    width: 60,
  },
  text: {
    fontSize: 15,
    color: '#232363',
    flex: 1,
  },
  weatherImg: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
});

export default HourlyAtom;
