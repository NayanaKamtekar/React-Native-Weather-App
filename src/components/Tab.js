import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/Feather';
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
const Tab = ({color, tab, onPress, icon}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Icon name={icon} size={20} color={color} />}
      <Text style={{color}}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default Tab;
