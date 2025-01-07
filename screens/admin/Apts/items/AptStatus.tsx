import React from "react";
import { TApt } from "@/utils";
import { Text, XStack } from "tamagui";
import { useAptStatus } from "../modules/useAptStatus";

type Props = Pick<TApt, "status">;
export function AptStatus({ status }: Props) {
  const { text, backgroundColor, color } = useAptStatus({ status });
  if (!text) return null;
  return (
    <XStack backgroundColor={backgroundColor} px={10} py={5}>
      <Text fow={'bold'} color={color}>{text}</Text>
    </XStack>
  );
}
