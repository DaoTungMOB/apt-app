import { Collapsible } from "@/components/Collapsible";
import { AppButtonNormal } from "@/elements";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "tamagui";
import { formatVND } from "@/utils";
import { useQueryAptDetailUtilities } from "../modules/useQueryAptDetailUtilities";

export function MyAptDetailUtilities() {
  const { apt_id } = useLocalSearchParams();
  const router = useRouter();
  const { data } = useQueryAptDetailUtilities(apt_id);
  console.log('data utility ~ ',data);
  const renderListUtility = () => {
    if (!data || data.length === 0) return;
    return (
      <View pb={10} gap={10}>
        {data.map((item) => {
          return (
            <View
              onPress={() =>
                router.push({
                  pathname: "/(tabs_user)/myApt/utilityDetail",
                  params: { utility_id: item._id },
                })
              }
              key={item._id}
              borderBottomWidth={1}
              borderBottomColor={"$borderapp"}
              mx={15}
              px={15}
              py={10}
              backgroundColor={"#fff"}
              elevationAndroid={3}
              borderRadius={12}
            >
              <Text>
                Dịch vụ: <Text ff={"$bold"}>{item.title}</Text>
              </Text>
              <Text>
                Giá dịch vụ: <Text ff={"$bold"}>{formatVND(item.price)}</Text>
              </Text>
              <Text>
                Mô tả dịch vụ: <Text ff={"$bold"}>{item.description}</Text>
              </Text>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <Collapsible title={"Dịch vụ phòng"}>{renderListUtility()}</Collapsible>
  );
}
