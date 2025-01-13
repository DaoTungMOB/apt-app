import { AppInputMask, AppTextare, AppTextInput } from "@/elements";
import React from "react";
import { useFormContext } from "react-hook-form";
import { createNumberMask } from "react-native-mask-input";

const vndMask = createNumberMask({
  prefix: ["đ", " "],
  delimiter: ".",
  separator: ",",
  precision: 0,
});

export function CreateUtilityForm() {
  const { control } = useFormContext();
  return (
    <React.Fragment>
      <AppTextInput
        name="title"
        control={control}
        label="Tên dịch vụ"
        placeholder="Tên dịch vụ"
        rules={{ required: { value: true, message: "Không được bỏ trống" } }}
      />
      <AppInputMask
        name="price"
        control={control}
        label="Giá dịch vụ"
        placeholder="Giá dịch vụ"
        rules={{ required: { value: true, message: "Không được bỏ trống" } }}
        returnType="unmasked"
        mask={vndMask}
      />
      <AppTextare
        name="description"
        control={control}
        label="Mô tả dịch vụ"
        placeholder="Mô tả dịch vụ"
        rules={{ required: { value: true, message: "Không được bỏ trống" } }}
      />
    </React.Fragment>
  );
}
