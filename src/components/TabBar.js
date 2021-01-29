import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
import Tab from './Tab';

const TabBar = ({state, navigation}) => {
  const [selected, setSelected] = useState('Home');
  const {routes} = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? 'red' : 'black';

  const handlePress = (activeTab, index) => {
      if (state.index!== index) {
        setSelected(activeTab);
        navigation.navigate(activeTab);
      }
    
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
              
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    // backgroundColor:'#fff',
    justifyContent: 'space-between',
    width: 250,
  },
});

export default TabBar;
