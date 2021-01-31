import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

const WeekRow = ({dateMonth, day, iconName, min, max}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textDate}>{dateMonth}</Text>
      <Text style={styles.textDay}>{day}</Text>
      <View style={styles.weatherImgView}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${iconName}@2x.png`,
          }}
          style={styles.weatherImg}
        />
      </View>
      <Text style={styles.textMin}>{min}</Text>
      <Text style={styles.textMax}>{max}</Text>
    </View>
  );
};

export default WeekRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  weatherImgView: {
    flex: 1,
    height: 40,
    justifyContent: 'flex-start',
    backgroundColor: "#99ddff",
    backgroundColor:'#abdbe3',
    borderRadius: 30,

  },

  weatherImg: {
    flex: 1,
    height: 40,
    resizeMode: 'contain',
  },

  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: "#232363",
  },
  textMin: {
    flex: 1,
    fontSize: 18,
    textAlign: 'right',
    padding: 10,
    color: "#232363",
  },
  textMax: {
    flex: 1,
    fontSize: 18,
    textAlign: 'left',
    padding: 10,
    color: "#232363",
  },
  textDate: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: "#232363"
  },
  textDay: {
    flex: 1,
    fontSize: 18,
    textAlign: 'left',
    padding: 10,
    color: "#232363"
  }
});
