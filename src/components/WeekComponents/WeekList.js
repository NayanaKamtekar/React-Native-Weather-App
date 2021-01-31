import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import WeekRow from './WeekRow';

const WeekList = ({timezone_offset, daily}) => {
  let weekRow = daily.map((elem, index) => {

    const date = new Date((elem.dt + timezone_offset) * 1000);
    const dayOrdinal = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const dateMonth = `${dayOrdinal}/${month}`;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      date.getDay()
    ];
    const iconName = elem?.weather?.[0]?.icon;
    const min = `${Math.round(parseFloat(elem?.temp?.min))} °C`;

    const max = `${Math.round(parseFloat(elem?.temp?.max))} °C`;

    return (
      <WeekRow
        key={index}
        dateMonth={dateMonth}
        day={day}
        iconName={iconName}
        min={min}
        max={max}
      />
    );
  });

  return <View style={styles.container}>{weekRow}</View>;
};

export default WeekList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'lightgray',
    margin:10,
    flex: 10,
    justifyContent: 'flex-start',
  },
});
