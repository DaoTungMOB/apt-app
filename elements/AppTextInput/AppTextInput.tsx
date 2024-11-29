import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { TextInputProps } from "react-native-paper";
import { useController, UseControllerProps } from "react-hook-form";
import { AppTextError } from "../AppTextError";
import { Colors } from "@/constants";

type Props = TextInputProps & UseControllerProps;

export function AppTextInput(props: Props) {
  const {
    name,
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
    ...textInputProps
  } = props;
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });

  return (
    <View>
      <TextInput
        mode="outlined"
        underlineColor={Colors.light.tint}
        activeUnderlineColor={Colors.light.tint}
        outlineColor={Colors.light.tint}
        activeOutlineColor={Colors.light.tint}
        {...textInputProps}
        value={value}
        onChangeText={onChange}
        error={error?.message}
        outlineStyle={[{ borderRadius: 10 }, textInputProps.outlineStyle]}
        contentStyle={{ backgroundColor: Colors.light.backgroundColor }}
        style={{ backgroundColor: Colors.light.backgroundColor }}
      />
      <AppTextError message={error?.message} />
    </View>
  );
}
