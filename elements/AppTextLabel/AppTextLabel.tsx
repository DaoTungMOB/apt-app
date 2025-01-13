import React from "react";
import { Text, TextProps } from "tamagui";

type Props = TextProps & { label?: string };
export function AppTextLabel({ label, ...rest }: Props) {
  if (!label) return null;
  return (
    <Text fontFamily={'$bold'} {...rest}>
      {label}
    </Text>
  );
}
