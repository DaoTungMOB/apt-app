import { View, Text } from "react-native";
import React from "react";
import { XStack, YStack } from "tamagui";
import { AppButtonNormal } from "@/elements";
import { Colors } from "@/constants";
import { useFormContext } from "react-hook-form";
import { useNavigation, useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { FetchApi, QUERY_KEY, uploadMultipleToCloudinary } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { PickedImage } from "@/utils";
import axios from "axios";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";

export type TCrateAptForm = {
  code: string;
  floorNumber: number;
  area: number;
  rentPrice: number;
  sellPrice: number;
  thumbnail: PickedImage[];
  imageUrls: PickedImage[];
};
export function CreateAptSubmit() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useFormContext();
  // console.log("errors ~ ", errors);
  const onsubmit = async (data: TCrateAptForm) => {
    try {
      appGlobalLoadingRef?.current.show();
      const thumbnail = await uploadMultipleToCloudinary(data.thumbnail);
      const imageUrls = await uploadMultipleToCloudinary(data.imageUrls);
      const response = await FetchApi.createApt({
        ...data,
        thumbnail,
        imageUrls,
      });
      Toast.show({ type: "success", text1: "Thêm căn hộ mới thành công" });
      navigation.goBack();
      queryClient.refetchQueries([QUERY_KEY.APT]);
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef?.current.hide();
    }
  };
  const goBack = () => navigation.goBack();
  return (
    <XStack gap={15} alignItems="center" py={15}>
      <AppButtonNormal flex={1} backgroundColor={"$error"} onPress={goBack}>
        Hủy
      </AppButtonNormal>
      <AppButtonNormal
        isLoading={isSubmitting}
        flex={1}
        onPress={handleSubmit(onsubmit)}
      >
        Thêm mới
      </AppButtonNormal>
    </XStack>
  );
}
