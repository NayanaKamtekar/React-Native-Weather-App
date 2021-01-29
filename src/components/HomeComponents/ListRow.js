import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ListAtom from "./ListAtom";

function ListRow({ rowMembers }) {
  let row = rowMembers.map((rowMember, index) => (
    <ListAtom
      key={index}
      measureName={rowMember.measureName}
      measureValue={rowMember.measureValue}
      measureIcon={rowMember.measureIcon}
    />
  ));
  return <View style={styles.listWrapper}>{row}</View>;
}
const styles = StyleSheet.create({
  listWrapper: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ListRow;
