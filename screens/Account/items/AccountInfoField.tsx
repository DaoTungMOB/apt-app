import { Colors } from "@/constants";
import React from "react";
import { Text, XStack } from "tamagui";

type Props = { label: String; Icon: React.JSXElement; onPress?: () => void };
export function AccountInfoField({ Icon, label, onPress = () => {} }: Props) {
  return (
    <XStack
      onPress={onPress}
      borderBottomWidth={1}
      borderBottomColor={Colors.light.borderapp}
      px={20}
      py={15}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fos={16} ff={"$semiBold"}>
        {label}
      </Text>
      <Icon />
    </XStack>
  );
}
