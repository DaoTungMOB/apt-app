import React from "react";
import { InputSelectImages } from "../../CreateApt/items/InputSelectImages";
import { AppInputMask, vndMask } from "@/elements";
import { Text } from "tamagui";
import { useFormContext } from "react-hook-form";
import { InputSelectThumnail } from "../../CreateApt/items/InputSelectThumnail";
import { useQueryApt } from "../../AptDetail/modules/useQueryApt";
import { useLocalSearchParams } from "expo-router";

export function EditAptForm() {
  const { apt_id } = useLocalSearchParams();
  const { data } = useQueryApt(apt_id);
  // console.log("data ~", data);
  const { control } = useFormContext();
  return (
    <>
      <InputSelectThumnail defaultImages={[data?.thumbnail]} />
      <InputSelectImages defaultImages={data?.imageUrls} />
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
        label="Tầng số"
        // placeholder="Nhập số tầng của căn hộ"
        rules={{ required: { value: true, message: "Không được để trống" } }}
        // iconRight={() => <Text>Tầng</Text>}
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
        returnType="unmasked"
        iconRight={() => <Text>VND</Text>}
        mask={vndMask}
      />
      <AppInputMask
        control={control}
        name="sellPrice"
        label="Giá bán"
        placeholder="Nhập giá bán của căn hộ"
        rules={{ required: { value: true, message: "Không được để trống" } }}
        iconRight={() => <Text>VND</Text>}
        mask={vndMask}
        returnType="unmasked"
      />
    </>
  );
}
