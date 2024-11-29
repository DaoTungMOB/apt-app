import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AppTextInput } from "@/elements";
import { CommonStyle } from "@/constants";

export function LoginContent() {
  const { control } = useFormContext();
  return (
    <View style={styles.container}>
      <AppTextInput
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Email"}
        placeholder="Email"
      />
      <AppTextInput
        name="password"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Email"}
        placeholder="Email"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 20 },
});
