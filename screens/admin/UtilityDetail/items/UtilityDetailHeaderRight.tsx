import { CirclePlus } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import React from "react";

export function UtilityDetailHeaderRight({
  utility_id,
}: {
  utility_id: string;
}) {
  const router = useRouter();
  return (
    <CirclePlus
      color={"$background"}
      onPress={() => {
        console.log("abc");
        router.push({
          pathname: "/(tabs_admin)/apt/invoice",
          params: { utility_id },
        });
      }}
    />
  );
}
