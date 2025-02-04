import { ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useQueryUtiityDetail } from "../UtilityDetail/modules/useQueryUtiityDetail";
import { Colors } from "@/constants";
import { EditUltilityForm } from "./items/EditUltilityForm";
import { FormProvider, useForm } from "react-hook-form";
import { EditUltilitySubmit } from "./items/EditUltilitySubmit";

export function EditUtilityScreen() {
  const forms = useForm();
  const { utility_id } = useLocalSearchParams();
  const { data } = useQueryUtiityDetail(utility_id);

  useEffect(() => {
    if (data) {
      forms.setValue("title", data?.title);
      forms.setValue("price", String(data?.price));
      forms.setValue("description", data?.description);
    }
  }, []);
  return (
    <FormProvider {...forms}>
      <ScrollView
        style={{ backgroundColor: Colors.light.background }}
        contentContainerStyle={{
          padding: 15,
        }}
      >
        <EditUltilityForm />
        <EditUltilitySubmit />
      </ScrollView>
    </FormProvider>
  );
}
