import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";

function ListAtom({ measureName, measureValue, measureIcon }) {
  return (
    <View style={styles.listItemView}>
      <Icon name={measureIcon} size={22} color="#b5245c" />
      <View style={styles.measurementView}>
        <Text style={styles.listItemText}>{measureName}</Text>
        <Text>{measureValue}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listItemView: {
    flexDirection: "row",
    alignItems: "center",
  },

  measurementView: {
    alignItems: "center",
    paddingLeft: 5,
  },

  listItemText: {
    fontSize: 15,
    color: "#232363",
  },
});

export default ListAtom;
