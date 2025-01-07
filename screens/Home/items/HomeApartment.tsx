import React from "react";
import { H4, H5, Square, Text, XStack, YStack } from "tamagui";
import { devide_with } from "@/constants";
import { Trash2 } from "@tamagui/lucide-icons";
import { useQueryAvaiableApartment } from "../modules/useQueryAvaiableApartment";
import { HomeApartmentItem } from "./HomeApartmentItem";

const box_size = (devide_with - 15 * 3) / 2;

export function HomeApartment() {
  const { data } = useQueryAvaiableApartment();
  console.log("data ~ ", data);
  if (!data || data?.length === 0) return null;
  return (
    <YStack gap={10}>
      <H4 p={10} pb={0} fow={"bold"}>
        Danh sách căn hộ trống
      </H4>
      <YStack>
        {data.map((item) => (
          <HomeApartmentItem key={item._id} apt={item} />
        ))}
      </YStack>
    </YStack>
  );
}
