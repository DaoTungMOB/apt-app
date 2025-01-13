import { AppButtonNormal, AppInputMask, AppSelectAccount } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import { FetchApi, QUERY_KEY } from "@/utils";
import {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { Masks } from "react-native-mask-input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Text, View } from "tamagui";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

type Props = { type: "rented" | "sold" };
export function AptDetailAddUser({ type }: Props) {
  console.log("type ~ ", type);
  const queryClient = useQueryClient();
  const { apt_id } = useLocalSearchParams();
  const { control, reset, handleSubmit, setValue } = useForm();
  const { bottom, top } = useSafeAreaInsets();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present(1);
  }, []);
  const snapPoints = useMemo(() => ["50%", "100%"], []);
  const onCancel = () => {
    reset();
    bottomSheetModalRef.current?.close();
  };
  const onSubmit = async (data) => {
    try {
      appGlobalLoadingRef.current?.show();
      await FetchApi.addUserApt({
        aptId: apt_id,
        endDate: data?.endDate
          ? dayjs(data?.endDate, "DD/MM/YYYY").valueOf()
          : 1746671993876,
        startDate: data?.startDate
          ? dayjs(data?.startDate, "DD/MM/YYYY").valueOf()
          : 1746671993876,
        userId: data?.userId?._id,
        status: type,
      });
      queryClient.refetchQueries({
        queryKey: [QUERY_KEY.APP, QUERY_KEY.ADMIN, QUERY_KEY.APP, apt_id],
      });
      bottomSheetModalRef.current?.close();
      Toast.show({ type: "success", text1: "Thay đổi thành công" });
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
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
      <BottomSheetFooter {...props}>
        <BottomSheetView
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            paddingHorizontal: 15,
          }}
        >
          <AppButtonNormal flex={1} bg={"$error"} onPress={onCancel}>
            Hủy
          </AppButtonNormal>
          <AppButtonNormal flex={1} onPress={handleSubmit(onSubmit)}>
            Thêm
          </AppButtonNormal>
        </BottomSheetView>
      </BottomSheetFooter>
    ),
    []
  );
  return (
    <React.Fragment>
      <AppButtonNormal flex={1} onPress={handlePresentModalPress}>
        {type === "rented" ? "Thêm người thuê" : "Thêm người mua"}
      </AppButtonNormal>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={1}
        backdropComponent={renderBackdrop}
        footerComponent={renderFooter}
        enableDynamicSizing
        topInset={top}
      >
        <BottomSheetScrollView
          style={{ paddingBottom: 15, paddingHorizontal: 15 }}
          contentContainerStyle={{ gap: 10 }}
        >
          {type === "rented" && (
            <>
              <AppInputMask
                name="startDate"
                control={control}
                label="Ngày bắt đầu"
                placeholder="DD/MM/YYYY"
                mask={Masks.DATE_DDMMYYYY}
                rules={{
                  required: { value: true, message: "Không được bỏ trống" },
                }}
              />
              <AppInputMask
                name="endDate"
                control={control}
                label="Ngày kết thúc"
                placeholder="DD/MM/YYYY"
                mask={Masks.DATE_DDMMYYYY}
                rules={{
                  required: { value: true, message: "Không được bỏ trống" },
                }}
              />
            </>
          )}
          <AppSelectAccount
            name="userId"
            control={control}
            label={`Chọn người ${type === "rented" ? "thuê" : "mua"}`}
            placeholder={`Chọn người ${type === "rented" ? "thuê" : "mua"}`}
            rules={{
              required: { value: true, message: "Không được bỏ trống" },
            }}
          />
        </BottomSheetScrollView>
      </BottomSheetModal>
    </React.Fragment>
  );
}
