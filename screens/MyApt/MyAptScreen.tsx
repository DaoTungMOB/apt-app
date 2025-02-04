import { FlatList } from "react-native";
import React, { useCallback } from "react";
import { AppButtonNormal, AppContainer } from "@/elements";
import { MyAptItem } from "./items/MyAptItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQueryMyApt } from "./modules/useQueryMyApt";
import { Text, View } from "tamagui";
import { FormProvider } from "react-hook-form";
import { Colors } from "@/constants";
import { useRouter } from "expo-router";

export function MyAptScreen() {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const { data } = useQueryMyApt();

  const listEmptyComponent = useCallback(() => {
    return (
      <View
        flex={1}
        justifyContent="center"
        alignItems="center"
        px={15}
        gap={20}
      >
        <Text ff={"$bold"} fos={20}>
          Bạn chưa thuê/mua căn hộ nào cả
        </Text>
        <AppButtonNormal onPress={() => router.push("/(tabs_user)")}>
          Xem nhà cho thuê/mua
        </AppButtonNormal>
      </View>
    );
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <MyAptItem apt={item} />}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: Colors.light.background, flex: 1 }}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={{ flex: 1, padding: 10 }}
    />
  );
}
