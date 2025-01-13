import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants";
import { AddInvoiceForm } from "./items/AddInvoiceForm";
import { FormProvider, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { AddInvoiceSubmit } from "./items/AddInvoiceSubmit";

export function AddInvoiceScreen() {
  const forms = useForm();
  return (
    <FormProvider {...forms}>
      <ScrollView
        style={{ backgroundColor: Colors.light.background, padding: 15 }}
        contentContainerStyle={{ gap: 10 }}
      >
        <AddInvoiceForm />
        <AddInvoiceSubmit />
      </ScrollView>
    </FormProvider>
  );
}
