import { View, Text } from "react-native";
import React from "react";
import { AppInputMask, AppTextare, AppTextInput, vndMask } from "@/elements";
import { useFormContext } from "react-hook-form";

export function EditUltilityForm() {
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
