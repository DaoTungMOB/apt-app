import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { AppTextError } from "../AppTextError";
import { Colors } from "@/constants";
import { Input, InputProps, YStack } from "tamagui";
import { AppTextLabel } from "../AppTextLabel";

type Props = InputProps & UseControllerProps & { label?: string };

export function AppTextInput(props: Props) {
  const {
    label,
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
    <YStack gap={2}>
      <AppTextLabel label={label} pb={5} />
      <Input
        value={value}
        onChangeText={onChange}
        bg={"$color.background"}
        boc={error?.message && "$error"}
        {...textInputProps}
      />
      <AppTextError message={error?.message} />
    </YStack>
  );
}
