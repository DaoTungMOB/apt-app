import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import { useQueryMyProfile } from "@/screens/UpdateProfile/modules/useQueryMyProfile";
import { FetchApi, pickImage, QUERY_KEY, uploadToCloudinary } from "@/utils";
import { Edit3 } from "@tamagui/lucide-icons";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import Toast from "react-native-toast-message";
import { Avatar, Text, View, XStack, YStack } from "tamagui";

const defaultAvatar = require("@/utils/images/th.jpg");
export function AccountHero() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQueryMyProfile();

  const changeAvatar = async () => {
    try {
      const image = await pickImage();
      if (image.length === 0) return;
      appGlobalLoadingRef.current?.show();
      const avatar = await uploadToCloudinary(image[0]);
      console.log("image ~ ", image);
      console.log("avatar ~ ", avatar);
      await FetchApi.updateProfile({ avatar: avatar.secure_url });
      queryClient.refetchQueries({
        queryKey: [QUERY_KEY.APP, QUERY_KEY.ACCOUNT, QUERY_KEY.MY_PROFILE],
      });
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  return (
    <View>
      <XStack alignItems="center" justifyContent="center">
        <View borderRadius={"$14"}>
          <Avatar circular size="$14">
            <Avatar.Image
              accessibilityLabel="Cam"
              src={data?.avatar || defaultAvatar}
            />
            <Avatar.Fallback backgroundColor="$grey" />
          </Avatar>
          <View
            onPress={changeAvatar}
            position="absolute"
            bg={"$background"}
            padding={8}
            borderRadius={50}
            bottom={10}
            right={10}
          >
            <Edit3 size={"$1"} />
          </View>
        </View>
      </XStack>
      <YStack py={20} gap={5}>
        <Text fos={16} ff={"$bold"} textAlign="center">
          {data?.email}
        </Text>
        <Text fos={18} ff={"$bold"} textAlign="center">
          {data?.lastName} {data?.firstName}
        </Text>
      </YStack>
    </View>
  );
}
