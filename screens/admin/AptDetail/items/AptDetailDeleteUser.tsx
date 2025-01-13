import { View, Text, Alert } from "react-native";
import React from "react";
import { AppButtonNormal } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { FetchApi, QUERY_KEY } from "@/utils";
import { useLocalSearchParams } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

type Props = { title?: string; userId?: string | null };
export function AptDetailDeleteUser({ title, userId }: Props) {
  const queryClient = useQueryClient();
  const { apt_id } = useLocalSearchParams();
  const onDelete = async () => {
    Alert.alert("Xóa người này", "Bạn có chắc muốn xóa người này không?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          try {
            appGlobalLoadingRef.current?.show();
            await FetchApi.deleteUserApt(apt_id);
            queryClient.refetchQueries({
              queryKey: [QUERY_KEY.APP, QUERY_KEY.ADMIN, QUERY_KEY.APP, apt_id],
            });
            Toast.show({ type: "success", text1: "Xóa thành công " });
          } catch (error) {
            console.log(error);
            Toast.show({
              type: "error",
              text1: "Xảy ra lỗi trong quá trình xử lý",
            });
          } finally {
            appGlobalLoadingRef.current?.hide();
          }
        },
      },
    ]);
  };
  return (
    <AppButtonNormal bg={"$error"} flex={1} onPress={onDelete}>
      {/* <Trash2 size={18} color={Colors.light.background} /> */}
      {title}
    </AppButtonNormal>
  );
}
