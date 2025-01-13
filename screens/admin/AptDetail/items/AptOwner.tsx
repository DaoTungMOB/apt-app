import React, { useId } from "react";
import { Avatar, Text, XStack, YStack } from "tamagui";
import { Colors } from "@/constants";
import { TApt } from "@/utils";
import { AptInformation } from "./AptInformation";
import { View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { AppButtonNormal } from "@/elements";
import { useController } from "react-hook-form";
import { Edit3, Trash2 } from "@tamagui/lucide-icons";
import { AptDetailUpdateUser } from "./AptDetailUpdateUser";
import dayjs from "dayjs";
import { AptDetailAddUser } from "./AptDetailAddUser";
import { AptDetailDeleteUser } from "./AptDetailDeleteUser";

type Props = Pick<TApt, "userProfile" | "status" | "userId">;

const defaulAvatar = require("@/utils/images/th.jpg");

export function AptOwner({ status, userProfile, userId }: Props) {
  console.log("userProfile ~ ", userProfile);
  const {
    field: { value, onChange },
  } = useController({ name: "status" });
  const renderLabel = () => {
    if (status === "rented") return "Người thuê:";
    if (status === "sold") return "Nguời mua:";
    return "Chưa có người thuê/mua";
  };
  const renderContent = () => {
    if (!userId)
      return (
        <XStack px={15} gap={15}>
          <AptDetailAddUser type="rented" />
          <AptDetailAddUser type="sold" />
        </XStack>
      );
    return (
      <View>
        <XStack px={15} gap={10} pb={10}>
          {status === "rented" && (
            <AptDetailUpdateUser
              title={`Thay người thuê`}
              userProfile={userProfile}
            />
          )}

          <AptDetailDeleteUser
            title={`Xóa người ${status === "rented" ? "thuê" : "mua"}`}
            userId={userProfile?._id}
          />
        </XStack>
        <XStack
          borderBottomWidth={1}
          borderBlockColor={Colors.light.borderapp}
          py={10}
          px={15}
        >
          <Text flex={0.4} ff={"$bold"}>
            Họ và tên:
          </Text>
          <XStack flex={0.6} alignItems="center" gap={10}>
            <Avatar circular size={40}>
              <Avatar.Image
                accessibilityLabel="Cam"
                src={userProfile?.avatar || defaulAvatar}
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <Text ff={"$bold"}>
              {userProfile?.lastName} {userProfile?.firstName}
            </Text>
          </XStack>
        </XStack>
        <AptInformation label="Số điện thoại:" content={userProfile?.phone} />
        <AptInformation label="CCCD:" content={userProfile?.cccd} />
        <AptInformation label="Email:" content={userProfile?.email} />
        <AptInformation label="Ngày sinh:" content={userProfile?.birthDay} />
      </View>
    );
  };
  return <Collapsible title={renderLabel()}>{renderContent()}</Collapsible>;
}
