import { View, Text, ScrollView } from "react-native";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { EditAptForm } from "./items/EditAptForm";
import { Colors } from "@/constants";
import { EditAptSubmit } from "./items/EditAptSubmit";

export default function EditApt() {
  const forms = useForm();
  return (
    <FormProvider {...forms}>
      <ScrollView
        style={{
          backgroundColor: Colors.light.background,
          padding: 15
        }}
        contentContainerStyle={{ gap: 10 }}
      >
        <EditAptForm />
        <EditAptSubmit />
      </ScrollView>
    </FormProvider>
  );
}
