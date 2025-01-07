import React from "react";
import { TAccountResponse } from "@/utils";
import { Avatar, Text, XStack, YStack } from "tamagui";

type Props = Pick<TAccountResponse, "userProlile">;
export function AptOwner({ userProlile }: Props) {
  if (!userProlile) return null;
  return (
      <XStack flex={1} alignItems="center" gap={10}>
        <Avatar circular size={40}>
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <Text fow={"bold"}>
          {userProlile?.firstName} {userProlile?.lastName} -{" "}
          {userProlile?.phone}
        </Text>
      </XStack>
  );
}
