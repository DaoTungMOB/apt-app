import { View, Text } from "react-native";
import React from "react";
import { AppContainer } from "@/elements";
import { useForm } from "react-hook-form";
import { LoginContent, LoginSubmit } from "@/screens";
import { Colors, CommonStyle } from "@/constants";
import { Link } from "expo-router";

export default function Login() {
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
        Đăng nhập
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
      <LoginContent />
      <Text
        style={{
          marginBottom: 20,
          marginTop: 10,
          textAlign: "right",
          fontWeight: "500",
          color: Colors.light.tint,
        }}
      >
        Bạn quên mật khẩu?
      </Text>
      <LoginSubmit />
      <Text
        style={{
          color: Colors.light.tint,
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        Bạn chưa có tài khoản?{" "}
        <Link
          href={"/(auth)/register"}
          style={{
            fontWeight: "600",
            textDecorationColor: Colors.light.tint,
            textDecorationStyle: "dashed",
            textDecorationLine: "underline",
          }}
        >
          Đăng ký
        </Link>
      </Text>
    </AppContainer>
  );
}
