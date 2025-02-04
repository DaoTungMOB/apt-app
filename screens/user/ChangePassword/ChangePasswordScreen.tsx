import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ChangePasswordForm } from "./items/ChangePasswordForm";
import { Colors } from "@/constants";
import { FormProvider, useForm } from "react-hook-form";
import { ChangePasswordSubmit } from "./items/ChangePasswordSubmit";

export function ChangePasswordScreen() {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <ScrollView
        style={{ backgroundColor: Colors.light.background, padding: 15 }}
        contentContainerStyle={{gap: 20}}
      >
        <ChangePasswordForm />
        <ChangePasswordSubmit />
      </ScrollView>
    </FormProvider>
  );
}
