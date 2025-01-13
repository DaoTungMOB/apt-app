import { FlatList } from "react-native";
import React from "react";
import { AppContainer } from "@/elements";
import { MyAptItem } from "./items/MyAptItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQueryMyApt } from "./modules/useQueryMyApt";
import { Text } from "tamagui";
import { FormProvider } from "react-hook-form";
import { Colors } from "@/constants";

export function MyAptScreen() {
  const { top } = useSafeAreaInsets();
  const { data } = useQueryMyApt();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <MyAptItem apt={item} />}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: Colors.light.background }}
    />
  );
}
