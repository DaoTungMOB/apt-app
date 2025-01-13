import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { AppTextError } from "../AppTextError";
import { Colors } from "@/constants";
import { Input, InputProps, XStack, YStack } from "tamagui";
import { AppTextLabel } from "../AppTextLabel";
import { ViewStyle } from "react-native";

type Props = InputProps &
  UseControllerProps & {
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
  };

export function AppTextInput(props: Props) {
  const {
    label,
    name,
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
    containerStyle,
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
    <YStack gap={2} style={containerStyle}>
      <AppTextLabel label={label} pb={5} />
      <XStack alignItems="stretch">
        <Input
          flex={1}
          value={value}
          onChangeText={onChange}
          placeholderTextColor={Colors.light.grey999}
          borderRadius={12}
          bg={"$color.background"}
          boc={error?.message && "$error"}
          {...textInputProps}
        />
      </XStack>

      <AppTextError message={error?.message} />
    </YStack>
  );
}
