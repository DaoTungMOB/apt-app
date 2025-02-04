import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants";
import { FormProvider, useForm } from "react-hook-form";
import { SendOtp } from "./items/SendOtp";
import { VerifyForgotPassword } from "./items/VerifyForgotPassword";
import { ResetPassword } from "./items/ResetPassword";

export function ForgotPasswordScreen() {
  const forms = useForm({ defaultValues: { step: "send_otp" } });
  console.log("error ~ ", forms.formState.errors);
  console.log("value ~ ", forms.watch());
  const step = forms.watch("step", "send_otp");
  console.log("step ~ ", step);
  const renderContent = () => {
    if (!step) return null;
    if (step === "send_otp") return <SendOtp />;
    if (step === "verify_otp") return <VerifyForgotPassword />;
    if (step === "reset_password") return <ResetPassword />;
  };
  return (
    <FormProvider {...forms}>
      <ScrollView
        style={{ backgroundColor: Colors.light.background }}
        contentContainerStyle={{ padding: 15 }}
      >
        {renderContent()}
      </ScrollView>
    </FormProvider>
  );
}
