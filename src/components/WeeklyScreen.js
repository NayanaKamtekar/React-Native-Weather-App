import React from "react";
import { Text, View } from "react-native";

export const WeeklyScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Weekly Screen.{navigation.getParam('city')}</Text>
    </View>
  );
};
