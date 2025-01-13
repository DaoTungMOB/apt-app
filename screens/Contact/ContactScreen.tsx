import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { AppContainer } from "@/elements";
import { FormProvider, useForm } from "react-hook-form";
import { ContactForm } from "./items/ContactForm";
import { ContactSubmit } from "./items/ContactSubmit";
import { Colors } from "@/constants";
import { useQueryMyProfile } from "../UpdateProfile/modules/useQueryMyProfile";

export function ContactScreen() {
  const { data } = useQueryMyProfile();
  const forms = useForm();
  useEffect(() => {
    if (data) {
      forms.setValue("email", data?.email);
      forms.setValue("phone", data?.phone);
    }
  }, [data]);
  return (
    <FormProvider {...forms}>
      <ScrollView
        style={{
          paddingHorizontal: 15,
          flex: 1,
          paddingTop: 15,
          backgroundColor: Colors.light.background,
        }}
        contentContainerStyle={{ gap: 10 }}
      >
        <ContactForm />
        <ContactSubmit />
      </ScrollView>
    </FormProvider>
  );
}
