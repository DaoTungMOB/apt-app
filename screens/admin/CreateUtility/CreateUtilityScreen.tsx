import { View, Text, ScrollView } from "react-native";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Colors } from "@/constants";
import { CreateUtilityForm } from "./items/CreateUtilityForm";
import { CreateUtilitySubmit } from "./items/CreateUtilitySubmit";

export function CreateUtilityScreen() {
  const forms = useForm();
  return (
    <FormProvider {...forms}>
      <ScrollView
        style={{ backgroundColor: Colors.light.background, padding: 15 }}
        contentContainerStyle={{ gap: 10 }}
      >
        <CreateUtilityForm />
        <CreateUtilitySubmit />
      </ScrollView>
    </FormProvider>
  );
}
