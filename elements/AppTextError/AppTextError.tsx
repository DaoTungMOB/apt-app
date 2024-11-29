import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { StyleProp } from "react-native";
import { TextStyle } from "react-native";

type Props = { message?: string | null; style: StyleProp<TextStyle> };
export function AppTextError({ message, style }: Props) {
  if (!message) return null;
  return (
    <Text style={[{ fontSize: 12, color: Colors.light.error }, style]}>
      {message}
    </Text>
  );
}
