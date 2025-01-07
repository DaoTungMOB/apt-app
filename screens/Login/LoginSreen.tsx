import { View } from "react-native";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContainer } from "@/elements";
import { Text } from "tamagui";
import { LoginSubmit } from "./items/LoginSubmit";
import { Link, useRouter } from "expo-router";
import { LoginContent } from "./items/LoginContent";
import { Colors, devide_height } from "@/constants";
import { AccountService, ROLE, useAppAccount } from "@/utils";

export function LoginScreen() {
  const account = useAppAccount();
  const router = useRouter();
  const form = useForm();

  useEffect(() => {
    if (account?.userProlile?.role === ROLE.ADMIN)
      router.replace("/(tabs_admin)");
    if (account?.userProlile?.role === ROLE.USER)
      router.replace("/(tabs_user)");
  }, [account]);

  if (account) return null;
  return (
    <AppContainer {...form} yStackProps={{ pt: devide_height / 8 }}>
      <Text fow={"bold"} fos={24} pb={10} ta={"center"} color={"$tint"}>
        Đăng nhập
      </Text>
      <Text fow={"500"} fos={16} ta={"center"} pb={30} mx={30}>
        Chào mừng bạn đến với ứng dụng quản lý căn hộ
      </Text>
      <LoginContent />
      <Text mb={20} mt={10} ta={"right"} fow={"500"} color={"$tint"}>
        Bạn quên mật khẩu?
      </Text>
      <LoginSubmit />
      <Text color={"$tint"} ta={"center"} pt={10}>
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
