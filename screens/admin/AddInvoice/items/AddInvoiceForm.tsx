import { View, Text } from "react-native";
import React from "react";
import { AppInputMask, AppTextInput } from "@/elements";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export function AddInvoiceForm() {
  const { control } = useFormContext();
  const today = dayjs();
  console.log("abc ~ ", dayjs().month());
  return (
    <>
      <AppInputMask
        name="title"
        control={control}
        label="Tên hóa đơn"
        placeholder="Tên hóa đơn"
        rules={{ required: { value: true, message: "Không được bỏ trống" } }}
      />
      <AppInputMask
        name="quantity"
        control={control}
        label="Số lượng"
        placeholder="Số lượng"
        keyboardType="numeric"
        rules={{ required: { value: true, message: "Không được bỏ trống" } }}
      />
      <AppInputMask
        name="month"
        control={control}
        label="Tháng"
        placeholder="Tháng"
        keyboardType="numeric"
        rules={{ required: { value: true, message: "Không được bỏ trống" } }}
      />
      <AppInputMask
        name="year"
        control={control}
        label="Năm"
        placeholder="Năm"
        keyboardType="numeric"
        rules={{ required: { value: true, message: "Không được bỏ trống" } }}
      />
    </>
  );
}
