import { FlatList } from "react-native";
import React from "react";
import { useQueryContact } from "./modules/useQueryContact";
import { AppLoading } from "@/elements";
import { Text } from "tamagui";
import { Colors } from "@/constants";
import { ListContactItem } from "./items/ListContactItem";

export function ListContactScreen() {
  const { data, isLoading } = useQueryContact();
  console.log("data ~ ", data);
  if (isLoading) return <AppLoading />;
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return <ListContactItem contact={item}/>;
      }}
      style={{ backgroundColor: Colors.light.background , paddingHorizontal: 15}}
    />
  );
}
