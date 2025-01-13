import React from "react";
import { Avatar, Text, View, XStack } from "tamagui";

export function ListContactItemUserInfo() {
  return (
    <XStack alignItems="center" gap={10}>
      <Avatar circular size="$4">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
      <Text ff={"$bold"} fos={16}>Nguyen Van A</Text>
    </XStack>
  );
}
