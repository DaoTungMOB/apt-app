import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { XStack, YStack } from "tamagui";
import MaskInput, { MaskInputProps } from "react-native-mask-input";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useStyleInput } from "./modules/useStyleInput";
import { useIconStyle } from "./modules/useIconStyle";
import { Colors } from "@/constants";
import { AppTextLabel } from "../AppTextLabel";
import { AppTextError } from "../AppTextError";

type Props = UseControllerProps &
  MaskInputProps & {
    label?: string;
    iconRight?: () => JSX.Element;
    iconLeft?: () => JSX.Element;
    containerStyle?: ViewStyle;
  };

export function AppInputMask({
  name,
  control,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  label,
  iconLeft,
  iconRight,
  containerStyle,
  ...maskInputProps
}: Props) {
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
  const inputStyles = useStyleInput({
    disabled,
    error: !!error?.message,
    iconLeft: !!iconLeft,
    iconRight: !!iconRight,
  });
  const iconStyles = useIconStyle({ disabled, error: !!error?.message });

  return (
    <View style={containerStyle}>
      <AppTextLabel label={label} pb={5} />
      <XStack alignItems="center">
        {!!iconLeft && (
          <XStack
            p={14}
            alignItems="center"
            justifyContent="center"
            height={46}
            borderWidth={1}
            borderTopLeftRadius={12}
            borderBottomLeftRadius={12}
            borderRightWidth={0}
            {...iconStyles}
          >
            {iconLeft?.()}
          </XStack>
        )}
        <MaskInput
          value={value}
          onChangeText={(masked, unmasked) => {
            console.log(unmasked);
            onChange(unmasked);
          }}
          style={[styles.input, inputStyles]}
          editable={!disabled}
          placeholderTextColor={Colors.light.grey999}
          {...maskInputProps}
        />
        {!!iconRight && (
          <XStack
            px={14}
            alignItems="center"
            justifyContent="center"
            height={46}
            borderWidth={1}
            borderTopRightRadius={12}
            borderBottomRightRadius={12}
            borderLeftWidth={0}
            {...iconStyles}
          >
            {iconRight?.()}
          </XStack>
        )}
      </XStack>
      <AppTextError message={error?.message} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 46,
    padding: 12,
    borderWidth: 1,
  },
});
