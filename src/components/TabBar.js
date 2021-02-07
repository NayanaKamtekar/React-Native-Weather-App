import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
import Tab from './Tab';

const TabBar = ({state, navigation, options}) => {

  const [selected, setSelected] = useState('Today');
  const {routes} = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? '#f2582e' : 'gray';

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
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
    // position: 'relative',
    bottom: 5,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    borderRadius: 100,
    elevation: 2,
  },
});

export default TabBar;
