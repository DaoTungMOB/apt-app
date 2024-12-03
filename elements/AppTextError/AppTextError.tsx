import React from "react";
import { Text, TextProps } from "tamagui";

type Props = { message?: string | null; textProps: TextProps };
export function AppTextError({ message, textProps }: Props) {
  if (!message) return null;
  return (
    <Text fos={12} color={"$error"} {...textProps}>
      {message}
    </Text>
  );
}
