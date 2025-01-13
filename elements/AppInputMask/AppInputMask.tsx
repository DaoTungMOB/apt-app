import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { XStack, YStack } from "tamagui";
import MaskInput, { MaskInputProps } from "react-native-mask-input";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useStyleInput } from "./modules/useStyleInput";
import { Colors } from "@/constants";
import { AppTextLabel } from "../AppTextLabel";
import { AppTextError } from "../AppTextError";

type Props = UseControllerProps &
  MaskInputProps & {
    label?: string;
    iconRight?: () => JSX.Element;
    iconLeft?: () => JSX.Element;
    containerStyle?: ViewStyle;
    returnType?: "masked" | "unmasked";
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
  returnType = "masked",
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
  const { borderColor, borderLeftWidth, borderRightWidth, backgroundColor } =
    useStyleInput({
      disabled,
      error: !!error?.message,
      iconLeft: !!iconLeft,
      iconRight: !!iconRight,
    });

  return (
    <View style={containerStyle}>
      <AppTextLabel label={label} pb={5} />
      <XStack
        alignItems="center"
        borderWidth={1}
        height={46}
        borderRadius={12}
        style={{ borderColor, backgroundColor }}
      >
        {!!iconLeft && (
          <XStack
            p={14}
            alignItems="center"
            justifyContent="center"
            height={44}
          >
            {iconLeft?.()}
          </XStack>
        )}
        <MaskInput
          value={value}
          onChangeText={(masked, unmasked) => {
            // console.log(unmasked);
            if (!returnType) return;
            if (returnType === "masked") onChange(masked);
            if (returnType === "unmasked") onChange(unmasked);
          }}
          style={[
            styles.input,
            { borderColor, borderRightWidth, borderLeftWidth },
          ]}
          editable={!disabled}
          placeholderTextColor={Colors.light.grey999}
          {...maskInputProps}
        />
        {!!iconRight && (
          <XStack
            px={14}
            alignItems="center"
            justifyContent="center"
            height={44}
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
    height: 45,
    padding: 12,
  },
});
