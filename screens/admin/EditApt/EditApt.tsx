import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { EditAptForm } from "./items/EditAptForm";
import { Colors } from "@/constants";
import { EditAptSubmit } from "./items/EditAptSubmit";
import { useLocalSearchParams } from "expo-router";
import { useQueryApt } from "../AptDetail/modules/useQueryApt";

export default function EditApt() {
  const { apt_id } = useLocalSearchParams();
  const { data } = useQueryApt(apt_id);
  // console.log("data ~", data);
  const forms = useForm();

  useEffect(() => {
    if (data) {
      forms.setValue("code", data.code);
      forms.setValue("floorNumber", String(data.floorNumber));
      forms.setValue("area", String(data.area));
      forms.setValue("rentPrice", String(data.rentPrice));
      forms.setValue("sellPrice", String(data.sellPrice));
    }
  }, [data]);
  return (
    <FormProvider {...forms}>
      <ScrollView
        style={{
          backgroundColor: Colors.light.background,
          // padding: 15,
        }}
        contentContainerStyle={{ gap: 10 , padding: 15}}
      >
        <EditAptForm />
        <EditAptSubmit />
      </ScrollView>
    </FormProvider>
  );
}
