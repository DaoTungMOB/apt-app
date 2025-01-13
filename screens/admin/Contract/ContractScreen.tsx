import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export function ContractScreen() {
  const { contract } = useLocalSearchParams();
  console.log("contract ~ ", contract);
  return (
    <View>
      <Text>ContractScreen</Text>
    </View>
  );
}
