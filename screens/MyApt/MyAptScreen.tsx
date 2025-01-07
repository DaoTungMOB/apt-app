import { FlatList } from "react-native";
import React from "react";
import { AppContainer } from "@/elements";
import { MyAptItem } from "./items/MyAptItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQueryMyApt } from "./modules/useQueryMyApt";
import { Text } from "tamagui";

export function MyAptScreen() {
  const { top } = useSafeAreaInsets();
  const { data } = useQueryMyApt();
  return (
    <AppContainer yStackProps={{ px: 0, pt: top }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MyAptItem apt={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text p={15} fos={20} fow={"bold"}>
            Danh sách căn hộ của tôi
          </Text>
        )}
      />
    </AppContainer>
  );
}
