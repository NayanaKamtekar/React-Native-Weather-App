import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

const WeekRow = ({dateMonth, day, iconName, min, max}) => {
  // const date = new Date( (dt + timezoneOffset) * 1000)
  // const dayOrdinal = date.getDate()
  // const month = (date.getMonth() + 1).toString().padStart(2, '0')
  // const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dateMonth}</Text>
      <Text style={styles.text}>{day}</Text>
      <View style={styles.weatherImgView}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${iconName}@2x.png`,
          }}
          style={styles.weatherImg}
        />
      </View>
      <Text style={styles.text}>{min}</Text>
      <Text style={styles.text}>{max}</Text>
    </View>
  );
};

export default WeekRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  weatherImgView: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },

  weatherImg: {
    flex: 1,
    height: 50,
    resizeMode: 'contain',
  },

  text: {
      flex: 1,
      justifyContent: 'center', 

  }
});
