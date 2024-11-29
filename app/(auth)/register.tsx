import { View, Text } from "react-native";
import React from "react";
import { RegisterContent, RegisterSubmit } from "@/screens";
import { Link } from "expo-router";
import { AppContainer } from "@/elements";
import { useForm } from "react-hook-form";
import { Colors } from "@/constants";

export default function Register() {
  const form = useForm();
  return (
    <AppContainer {...form} style={[{ padding: 20, paddingTop: 100 }]}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 24,
          paddingBottom: 10,
          textAlign: "center",
          color: Colors.light.tint,
        }}
      >
        Đăng Ký
      </Text>
      <Text
        style={{
          fontWeight: "500",
          fontSize: 16,
          textAlign: "center",
          paddingBottom: 30,
          marginHorizontal: 50,
        }}
      >
        Chào mừng bạn đến với ứng dụng quản lý căn hộ
      </Text>
      <View style={{ gap: 20 }}>
        <RegisterContent />
        <RegisterSubmit />
      </View>

      <Text
        style={{
          color: Colors.light.tint,
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        Bạn đã có tài khoản?{" "}
        <Link
          href={"/(auth)"}
          style={{
            fontWeight: "600",
            textDecorationColor: Colors.light.tint,
            textDecorationStyle: "dashed",
            textDecorationLine: "underline",
          }}
        >
          Đăng nhập
        </Link>
      </Text>
    </AppContainer>
  );
}
