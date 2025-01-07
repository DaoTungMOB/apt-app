import { View, Text } from "react-native";
import React from "react";
import { Spinner } from "tamagui";
import { Colors } from "@/constants";

type Props = { size?: "small" | "large" | undefined };
export function AppLoading({ size = "large" }: Props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.light.background,
      }}
    >
      <Spinner size={size} />
    </View>
  );
}
