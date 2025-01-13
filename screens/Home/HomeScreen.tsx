import React from "react";
import { AppContainer } from "@/elements";
import { Text } from "tamagui";
import { HomeHeader } from "./items/HomeHeader";
import { ScrollView } from "react-native";
import { HomeApartment } from "./items/HomeApartment";
import { HomeSwipper } from "./items/HomeSwipper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function HomeScreen() {
  const {top} = useSafeAreaInsets()
  return (
    <AppContainer>
      <HomeHeader />
      <ScrollView>
        <HomeSwipper />
        <HomeApartment />
      </ScrollView>
    </AppContainer>
  );
}
