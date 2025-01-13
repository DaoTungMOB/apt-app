import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { AppContainer, AppLoading } from "@/elements";
import { useForm } from "react-hook-form";
import { UpdateProfileForm } from "./items/UpdateProfileForm";
import { UpdateProfileSubmit } from "./items/UpdateProfileSubmit";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQueryMyProfile } from "./modules/useQueryMyProfile";

const schema = yup
  .object({
    firstName: yup.string().required("Vui lòng tạo thông tin này"),
    lastName: yup.string().required("Vui lòng tạo thông tin này"),
    cccd: yup.string().required("Vui lòng tạo thông tin này"),
    phone: yup.string().required("Vui lòng tạo thông tin này"),
    birthDay: yup.string().required("Vui lòng tạo thông tin này"),
  })
  .required();

export function UpdateProfileScreen() {
  const { data, isLoading } = useQueryMyProfile();
  console.log("data ~ ", data);
  const forms = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    if (data) {
      const { birthDay, cccd, firstName, lastName, phone, email } = data;
      forms.setValue("birthDay", birthDay);
      forms.setValue("cccd", cccd);
      forms.setValue("firstName", firstName);
      forms.setValue("lastName", lastName);
      forms.setValue("phone", phone);
    }
  }, [data]);
  if (isLoading) return <AppLoading />;
  return (
    <AppContainer form={forms}>
      <ScrollView
        style={{ paddingHorizontal: 15 }}
        contentContainerStyle={{ gap: 10 }}
      >
        <UpdateProfileForm />
        <UpdateProfileSubmit />
      </ScrollView>
    </AppContainer>
  );
}
