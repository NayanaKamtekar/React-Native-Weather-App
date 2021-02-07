import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HourlyAtom from './HourlyAtom';

const HourlyRow = ({timezone_offset, hourly}) => {
  if (typeof hourly != 'undefined') {
    let row = hourly.map((elem, index) => {
      if (index < 12) {
        const temp = `${Math.round(parseFloat(elem?.temp))} °C`;
        const date = new Date((elem.dt + timezone_offset) * 1000);
        const time = `${date
          .getHours()
          .toString()
          .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        return <HourlyAtom key={index} time={time} temp={temp} iconName={elem?.weather?.[0]?.icon}/>;
      }
      return null;
    });
    return (
      <ScrollView style={styles.listWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
        {row}
      </ScrollView>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  listWrapper: {
    paddingTop: 30,
    // justifyContent: 'space-around',
  },
});

export default HourlyRow;
