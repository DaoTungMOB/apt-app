import React, { useId } from "react";
import { Avatar, Text, XStack, YStack } from "tamagui";
import { Colors } from "@/constants";
import { TApt } from "@/utils";
import { AptInformation } from "./AptInformation";
import { View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { AppButtonNormal } from "@/elements";
import { AptSelectUser, selectUserBottomSheetModalRef } from "./AptSelectUser";
import { useController } from "react-hook-form";

type Props = Pick<TApt, "userProfile" | "status" | "userId">;

export function AptOwner({ status, userProfile, userId }: Props) {
  const {
    field: { value, onChange },
  } = useController({ name: "status" });
  const renderLabel = () => {
    if (status === "rented") return "Người thuê:";
    if (status === "sold") return "Nguời bán:";
    return "Chưa có người thuê/mua";
  };
  const openBottomSheet = (status: "rented" | "sold") => {
    onChange(status);
    selectUserBottomSheetModalRef?.current?.present();
  };
  const renderContent = () => {
    if (!userId)
      return (
        <XStack px={15} gap={15}>
          <AppButtonNormal flex={1} onPress={() => openBottomSheet("rented")}>
            Thêm người thuê
          </AppButtonNormal>
          <AppButtonNormal flex={1} onPress={() => openBottomSheet("sold")}>
            Thêm người mua
          </AppButtonNormal>
        </XStack>
      );
    return (
      <View>
        <XStack px={15} gap={15}>
          <AppButtonNormal flex={1} onPress={() => openBottomSheet("rented")}>
            Thay đổi người thuê
          </AppButtonNormal>
          <AppButtonNormal flex={1} onPress={() => openBottomSheet("sold")}>
            Thay đổi người mua
          </AppButtonNormal>
        </XStack>
        <XStack
          borderBottomWidth={1}
          borderBlockColor={Colors.light.borderapp}
          py={10}
          px={15}
        >
          <Text flex={0.4} fos={16} fow={"bold"}>
            Họ và tên:
          </Text>
          <XStack flex={0.6} alignItems="center" gap={10}>
            <Avatar circular size={40}>
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <Text fow={"bold"}>Pham Van A</Text>
          </XStack>
        </XStack>
        <AptInformation label="Số điện thoại:" content="0123456789" />
        <AptInformation label="CCCD:" content="0123456789" />
        <AptInformation label="Email:" content="abc@gmail.com" />
        <AptInformation label="Ngày sinh:" content="01/02/2003" />
      </View>
    );
  };
  return <Collapsible title={renderLabel()}>{renderContent()}</Collapsible>;
}
