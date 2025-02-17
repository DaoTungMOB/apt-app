import { Colors } from "@/constants";
import React from "react";
import { Text, XStack } from "tamagui";

type Props = { label: string; content?: string };
export function AptInformation({ label, content }: Props) {
  return (
    <XStack
      borderBottomWidth={1}
      borderBlockColor={Colors.light.borderapp}
      py={10}
      px={15}
    >
      <Text flex={0.4}  ff={"$bold"}>
        {label}
      </Text>
      <Text flex={0.6} >
        {content}
      </Text>
    </XStack>
  );
}
