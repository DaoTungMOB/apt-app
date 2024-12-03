import React from "react";
import { AppContainer } from "@/elements";
import { Text } from "tamagui";
import { HomeHeader } from "./items/HomeHeader";
import { ScrollView } from "react-native";
import { HomeServices } from "./items/HomeServices";
import { HomeSwipper } from "./items/HomeSwipper";

export function HomeScreen() {
  return (
    <AppContainer yStackProps={{ px: 0 }}>
      <HomeHeader />
      <ScrollView>
        <HomeSwipper />
        <HomeServices />
      </ScrollView>
    </AppContainer>
  );
}
