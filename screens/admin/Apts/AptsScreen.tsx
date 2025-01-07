import { View, Text, FlatList } from "react-native";
import React from "react";
import { AppContainer, AppLoading } from "@/elements";
import { useQueryListApt } from "./modules/useQueryListApt";
import { ListAptItem } from "./items/ListAptItem";

export function AptsScreen() {
  const { data, isLoading } = useQueryListApt();
  if (isLoading) return <AppLoading />;
  return (
    <AppContainer yStackProps={{ px: 0 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ListAptItem data={item} />;
        }}
      />
    </AppContainer>
  );
}
