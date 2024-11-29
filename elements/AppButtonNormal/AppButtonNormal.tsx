import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { ButtonProps } from "react-native-paper";

type Props = ButtonProps;

export function AppButtonNormal(props: Props) {
  return (
    <Button
      mode="contained"
      {...props}
      contentStyle={[{ paddingVertical: 5 }, props.contentStyle]}
      style={[{ borderRadius: 10 }, props.style]}
    />
  );
}
