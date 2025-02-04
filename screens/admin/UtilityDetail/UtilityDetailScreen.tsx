import { Alert, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Text, View, XStack } from "tamagui";
import { FetchApi, QUERY_KEY, TUtility } from "@/utils";
import { AptInformation } from "../AptDetail/items/AptInformation";
import { UtilityDetailHeaderRight } from "./items/UtilityDetailHeaderRight";
import { useQueryUtiityDetail } from "./modules/useQueryUtiityDetail";
import { UtilityDetailInvoice } from "./items/UtilityDetailInvoice";
import { AppButtonNormal } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { useQueryClient } from "@tanstack/react-query";

export function UtilityDetailScreen() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { utility_id } = useLocalSearchParams();
  const { data } = useQueryUtiityDetail(utility_id);
  console.log(data);
  const navigation = useNavigation();
  console.log("utility_id ~ ", utility_id);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <UtilityDetailHeaderRight utility_id={utility_id} />,
    });
  }, [navigation]);

  const deleteUtility = async () => {
    try {
      appGlobalLoadingRef.current?.hide();
      Alert.alert(
        "Vô hiệu hóa dịch vụ",
        "Bạn có chắc muốn vô hiệu hóa dịch vụ này",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              await FetchApi.deleteUtility(utility_id);
              queryClient.refetchQueries({
                queryKey: [
                  QUERY_KEY.APP,
                  QUERY_KEY.ADMIN,
                  QUERY_KEY.UTILITY,
                  utility_id,
                ],
              });
              Toast.show({
                type: "success",
                text1: "Vô hiệu hóa dịch vụ thành công",
              });
            },
          },
        ]
      );
    } catch (error) {
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  const restoreUtility = async () => {
    try {
      appGlobalLoadingRef.current?.hide();
      Alert.alert(
        "Khôi phục dịch vụ",
        "Bạn có chắc muốn khôi phục dịch vụ này",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              await FetchApi.restoreUtility(utility_id);
              queryClient.refetchQueries({
                queryKey: [
                  QUERY_KEY.APP,
                  QUERY_KEY.ADMIN,
                  QUERY_KEY.UTILITY,
                  utility_id,
                ],
              });
              Toast.show({
                type: "success",
                text1: "Khôi phục dịch vụ thành công",
              });
            },
          },
        ]
      );
    } catch (error) {
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <AptInformation label={"Tên dịch vụ:"} content={data?.title} />
      <AptInformation label={"Giá dịch vụ:"} content={data?.price} />
      <AptInformation label={"Mô tả dịch vụ:"} content={data?.description} />
      <XStack alignItems="center" m={15} mb={0} gap={15}>
        {!data?.deletedAt ? (
          <AppButtonNormal
            flex={1}
            backgroundColor={"$error"}
            onPress={deleteUtility}
          >
            Vô hiệu dịch vụ
          </AppButtonNormal>
        ) : (
          <AppButtonNormal
            flex={1}
            backgroundColor={"#75ba75"}
            onPress={restoreUtility}
          >
            Khôi phục dịch vụ
          </AppButtonNormal>
        )}

        <AppButtonNormal
          flex={1}
          onPress={() =>
            router.push({
              pathname: "/(tabs_admin)/apt/utility/editUtility",
              params: { utility_id },
            })
          }
        >
          Chỉnh sửa dịch vụ
        </AppButtonNormal>
      </XStack>
      <UtilityDetailInvoice />
    </ScrollView>
  );
}
