import React, { createRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useQueryUser } from "../modules/useQueryUser";
import { Text, XStack } from "tamagui";
import AppSelectUserItem from "./AppSelectUserItem";
import { FormProvider, useForm } from "react-hook-form";
import { AppButtonNormal } from "@/elements";
import { Colors } from "@/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Toast from "react-native-toast-message";
import { FetchApi, QUERY_KEY } from "@/utils";
import { useLocalSearchParams } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

const schema = yup
  .object({
    userId: yup.string().required("Không được để trống"),
  })
  .required();
export const selectUserBottomSheetModalRef = createRef<BottomSheetModal>();
type Props = { initialUser?: string; status: "rented" | "sold" };
export function AptSelectUser({ initialUser, status }: Props) {
  const { apt_id } = useLocalSearchParams();
  const queryClient = useQueryClient();
  const forms = useForm({
    defaultValues: { userId: initialUser },
    resolver: yupResolver(schema),
  });
  console.log("errors ~ ", forms.formState.errors);
  const { data } = useQueryUser();
  const onSubmit = async (data) => {
    try {
      console.log("data ~ ", data);
      const { userId } = data;
      console.log("status ~ ", { aptId: apt_id, data: { status, userId } });
      await FetchApi.changeUserApt({ aptId: apt_id, data: { status, userId } });
      selectUserBottomSheetModalRef?.current?.close();
      Toast.show({ type: "success", text1: "Thành công" });
      queryClient.refetchQueries([
        QUERY_KEY.APP,
        QUERY_KEY.ADMIN,
        QUERY_KEY.APP,
        apt_id,
      ]);
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    }
  };
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter {...props} bottomInset={0}>
        <XStack gap={15} px={15} py={15} backgroundColor={"#fff"}>
          <AppButtonNormal
            backgroundColor={Colors.light.red}
            flex={1}
            onPress={() => {
              selectUserBottomSheetModalRef?.current?.close();
              forms.reset();
            }}
          >
            Hủy
          </AppButtonNormal>
          <AppButtonNormal flex={1} onPress={forms.handleSubmit(onSubmit)}>
            OK
          </AppButtonNormal>
        </XStack>
      </BottomSheetFooter>
    ),
    []
  );
  return (
    <FormProvider {...forms}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={selectUserBottomSheetModalRef}
          backdropComponent={renderBackdrop}
          footerComponent={renderFooter}
          enablePanDownToClose
          enableDynamicSizing
        >
          <BottomSheetFlatList
            data={data}
            renderItem={({ item }) => {
              return <AppSelectUserItem userProlile={item} />;
            }}
            style={{ paddingHorizontal: 15 }}
            contentContainerStyle={{ gap: 10 }}
            ListFooterComponent={() => {
              if (!forms.formState.errors?.userId?.message) return null;
              return (
                <Text color={Colors.light.red}>
                  {forms.formState.errors?.userId?.message}
                </Text>
              );
            }}
          />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </FormProvider>
  );
}
