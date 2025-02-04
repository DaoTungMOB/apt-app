import { View, Text } from "react-native";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AppButtonNormal } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { FetchApi, QUERY_KEY, uploadMultipleToCloudinary } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
export type TEditAptForm = {
  code: string;
  floorNumber: number;
  area: number;
  rentPrice: number;
  sellPrice: number;
  thumbnail?: PickedImage[];
  imageUrls?: PickedImage[];
};
export function EditAptSubmit() {
  const queryClient = useQueryClient();
  const { apt_id } = useLocalSearchParams();
  const navigation = useNavigation();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();
  const onSubmit = async (data: TEditAptForm) => {
    try {
      const { area, code, floorNumber, rentPrice, sellPrice } = data;
      console.log("data submit ~ ", data);
      appGlobalLoadingRef.current?.show();
      let thumbnail: UploadResponse[], imageUrls: UploadResponse[];
      if (data?.thumbnail)
        thumbnail = await uploadMultipleToCloudinary(data.thumbnail);
      if (data?.imageUrls)
        imageUrls = await uploadMultipleToCloudinary(data.imageUrls);
      const dataSubmit: {
        code: string;
        floorNumber: number;
        area: number;
        rentPrice: number;
        sellPrice: number;
        thumbnail?: UploadResponse[];
        imageUrls?: UploadResponse[];
        apt_id: string;
      } = {
        apt_id,
        area,
        code,
        floorNumber,
        rentPrice,
        sellPrice,
        imageUrls,
        thumbnail,
      };
      const response = await FetchApi.editApt(dataSubmit);
      Toast.show({ type: "success", text1: "Chỉnh sửa căn hộ thành công" });
      queryClient.refetchQueries({
        queryKey: [QUERY_KEY.APP, QUERY_KEY.ADMIN, QUERY_KEY.APP, apt_id],
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  return (
    <AppButtonNormal isLoading={isSubmitting} onPress={handleSubmit(onSubmit)}>
      Chỉnh sửa
    </AppButtonNormal>
  );
}
