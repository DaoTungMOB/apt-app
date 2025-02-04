import React from "react";
import { AppContainer, AppLoading } from "@/elements";
import { Text, XStack } from "tamagui";
import { useLocalSearchParams } from "expo-router";
import { useQueryApt } from "./modules/useQueryApt";
import { Colors } from "@/constants";
import { AptInformation } from "./items/AptInformation";
import { formatVND } from "@/utils";
import { AptStatus } from "../Apts/items/AptStatus";
import { AptOwner } from "./items/AptOwner";
import { AptImages } from "./items/AptImages";
import { ScrollView } from "react-native";
import { AptSelectUser } from "./items/AptSelectUser";
import { FormProvider, useForm } from "react-hook-form";
import { AptDetailUtilities } from "./items/AptDetailUtilities";
import { AppDetailContracts } from "./items/AppDetailContracts";

export function AptDetail() {
  const forms = useForm();
  const status = forms.watch("status");
  const { apt_id } = useLocalSearchParams();
  const { data, isLoading } = useQueryApt(apt_id);
  console.log(data);
  if (isLoading) return <AppLoading />;
  return (
    <>
      <FormProvider {...forms}>
        <ScrollView style={{ backgroundColor: Colors.light.background }}>
          <AptInformation label={"Mã căn hộ:"} content={data?.code} />
          <XStack
            borderBottomWidth={1}
            borderBlockColor={Colors.light.borderapp}
            py={10}
            px={15}
          >
            <Text flex={0.4} fos={16} ff={"$bold"}>
              Trạng thái:
            </Text>
            <XStack flex={0.6}>
              <AptStatus status={data?.status} />
            </XStack>
          </XStack>
          <AptInformation
            label={"Tầng:"}
            content={`Tầng ${data?.floorNumber}`}
          />
          <AptInformation label={"Diện tích:"} content={`${data?.area}m2`} />
          <AptInformation
            label={"Giá thuê:"}
            content={formatVND(data?.rentPrice)}
          />
          <AptInformation
            label={"Giá bán:"}
            content={formatVND(data?.sellPrice)}
          />
          <AptOwner
            status={data?.status}
            userProfile={data?.userProfile}
            userId={data?.userId}
          />
          <AptDetailUtilities />
          <AptImages imageUrls={data?.imageUrls} />
          <AppDetailContracts />
        </ScrollView>
      </FormProvider>
      <AptSelectUser initialUser={data?.userId} status={status} />
    </>
  );
}
