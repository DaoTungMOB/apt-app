import { View, Text, FlatList } from "react-native";
import React from "react";
import { AppContainer, AppLoading } from "@/elements";
import { useQueryListApt } from "./modules/useQueryListApt";
import { ListAptItem } from "./items/ListAptItem";
import { Colors } from "@/constants";

export function AptsScreen() {
  const { data, isLoading } = useQueryListApt();
  if (isLoading) return <AppLoading />;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <ListAptItem data={item} />;
      }}
      style={{backgroundColor: Colors.light.background}}
    />
  );
}
