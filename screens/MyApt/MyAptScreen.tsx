import { View, Text, FlatList } from "react-native";
import React from "react";
import { AppContainer } from "@/elements";
import { MyAptItem } from "./items/MyAptItem";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1732559797723-4af87682e682?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    totalFloor: 5,
    totalRooms: 10,
    area: 1000,
    "Owner's name": "Nguyen Van A",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1732559797723-4af87682e682?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    totalFloor: 5,
    totalRooms: 10,
    area: 1000,
    "Owner's name": "Nguyen Van A",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1732559797723-4af87682e682?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    totalFloor: 5,
    totalRooms: 10,
    area: 1000,
    "Owner's name": "Nguyen Van A",
  },
];

export function MyAptScreen() {
  return (
    <AppContainer yStackProps={{ px: 15 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MyAptItem apt={item} />}
        contentContainerStyle={{ gap: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </AppContainer>
  );
}
