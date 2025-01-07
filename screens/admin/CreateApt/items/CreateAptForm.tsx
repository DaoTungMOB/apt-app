import { ScrollView } from "react-native";
import React from "react";
import { Text, YStack } from "tamagui";
import { AppInputMask, AppTextInput } from "@/elements";
import { useFormContext } from "react-hook-form";
import { Colors } from "@/constants";
import { InputSelectThumnail } from "./InputSelectThumnail";
import { InputSelectImages } from "./InputSelectImages";

export function CreateAptForm() {
  const { control } = useFormContext();
  return (
    <ScrollView
      contentContainerStyle={{ gap: 20, paddingVertical: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <InputSelectThumnail />
      <InputSelectImages />
      <AppInputMask
        control={control}
        name="code"
        label="Mã căn hộ"
        placeholder="Nhập mã căn hộ"
        rules={{ required: { value: true, message: "Không được để trống" } }}
      />
      <AppInputMask
        control={control}
        name="floorNumber"
        label="Số tầng"
        placeholder="Nhập số tầng của căn hộ"
        rules={{ required: { value: true, message: "Không được để trống" } }}
        iconRight={() => <Text>Tầng</Text>}
      />
      <AppInputMask
        control={control}
        name="area"
        label="Diện tích"
        placeholder="Nhập diện tích của căn hộ"
        rules={{ required: { value: true, message: "Không được để trống" } }}
        iconRight={() => <Text>M2</Text>}
      />
      <AppInputMask
        control={control}
        name="rentPrice"
        label="Giá thuê"
        placeholder="Nhập Giá thuê của căn hộ"
        rules={{
          required: { value: true, message: "Không được để trống" },
          min: { value: 0, message: "Giá không thể âm" },
        }}
        iconRight={() => <Text>VND</Text>}
      />
      <AppInputMask
        control={control}
        name="sellPrice"
        label="Giá bán"
        placeholder="Nhập giá bán của căn hộ"
        rules={{ required: { value: true, message: "Không được để trống" } }}
        iconRight={() => <Text>VND</Text>}
      />
    </ScrollView>
  );
}
