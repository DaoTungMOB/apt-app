import { View, Text } from "react-native";
import React, { createRef, useCallback, useMemo } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { AppButtonNormal } from "@/elements/AppButtonNormal";
import { useQueryUser } from "../modules/useQueryUser";
import { Avatar, Checkbox, XStack } from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors, devide_height } from "@/constants";
import { TAccount } from "@/utils";

type Props = UseControllerProps;

export const appBottomSheetSelectAccountRef = createRef<BottomSheetModal>();
export function BottomSheetListAccount(useControllerProps: Props) {
  const { data } = useQueryUser();
  const { top, bottom } = useSafeAreaInsets();
  const {
    field: { value, onChange },
  } = useController({ ...useControllerProps });
  const snapPoints = useMemo(() => ["70%", "100%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present(1);
  }, []);
  const onPress = (user: TAccount) => onChange(user);
  const onCancel = () => {
    onChange(undefined);
    appBottomSheetSelectAccountRef.current?.close();
  };
  const onOK = () => {
    appBottomSheetSelectAccountRef.current?.close();
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
            paddingTop: 15,
            backgroundColor: Colors.light.background,
          }}
        >
          <AppButtonNormal flex={1} bg={"$error"} onPress={onCancel}>
            Hủy
          </AppButtonNormal>
          <AppButtonNormal flex={1} onPress={onOK}>
            Chọn người dùng
          </AppButtonNormal>
        </BottomSheetView>
      </BottomSheetFooter>
    ),
    []
  );
  return (
    <BottomSheetModal
      ref={appBottomSheetSelectAccountRef}
      snapPoints={snapPoints}
      index={0}
      backdropComponent={renderBackdrop}
      footerComponent={renderFooter}
      topInset={top}
      onDismiss={() => console.log("abc")}
    >
      <BottomSheetView style={{ flex: 1 }}>
        <BottomSheetFlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <XStack
                onPress={() => onPress(item)}
                backgroundColor={"#eeeeee"}
                borderRadius={12}
                px={20}
                py={15}
                alignItems="center"
                gap={10}
              >
                <Checkbox
                  size={"$6"}
                  checked={value?._id === item?._id}
                  onPress={() => onPress(item)}
                >
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox>
                <Avatar circular size="$3">
                  <Avatar.Image
                    accessibilityLabel="Cam"
                    source={require("@/utils/images/th.jpg")}
                  />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Text fow={"bold"} fos={14}>
                  {item?.firstName} {item?.lastName} - {item?.phone}
                </Text>
              </XStack>
            );
          }}
          style={{ paddingHorizontal: 15 }}
          contentContainerStyle={{ gap: 10, paddingBottom: 65 }}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
}
