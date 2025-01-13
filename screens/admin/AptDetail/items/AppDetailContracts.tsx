import { Collapsible } from "@/components/Collapsible";
import { Avatar, Text, View, XStack } from "tamagui";
import { useQueryContracts } from "../modules/useQueryContracts";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList } from "react-native";
import { TContract } from "@/utils";
import { ViewStyle } from "react-native";

const defaulAvatar = require("@/utils/images/th.jpg");

const AppDetailContractsStatus = ({
  status,
  type,
}: Pick<TContract, "status" | "type">) => {
  const statusStyles = {
    effective: {
      backgroundColor: "rgba(46, 124, 255, 0.4)",
      color: "rgb(46, 124, 255)",
      text: "Còn hạn",
    },
    ended: {
      backgroundColor: "rgba(229, 9, 20, 0.4)",
      color: "rgb(229, 9, 20)",
      text: "Hết hạn",
    },
  }[`${status}`];
  const typeStyles = {
    sold: {
      backgroundColor: "rgba(50, 119, 107, 0.4)",
      color: "rgb(50, 119, 107)",
      text: "Bán",
    },
    rented: {
      backgroundColor: "rgba(75, 82, 100, 0.4)",
      color: "rgb(75, 82, 100)",
      text: "Thuê",
    },
  }[`${type}`];
  return (
    <>
      <View
        style={{
          backgroundColor: statusStyles.backgroundColor,
          paddingHorizontal: 5,
          paddingVertical: 3,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: statusStyles.color }}>{statusStyles.text}</Text>
      </View>
      <View
        style={{
          backgroundColor: typeStyles.backgroundColor,
          paddingHorizontal: 5,
          paddingVertical: 3,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: typeStyles.color }}>{typeStyles.text}</Text>
      </View>
    </>
  );
};

export function AppDetailContracts() {
  const router = useRouter();
  const { apt_id } = useLocalSearchParams();
  const { data } = useQueryContracts(apt_id);
  const renderContent = () => {
    if (!data || data.length === 0) return;
    return (
      <View>
        {data.map((item) => {
          return (
            <View
              onPress={() =>
                router.push({
                  pathname: "/(tabs_admin)/apt/contract",
                  params: { contract: item },
                })
              }
              key={item?._id}
              px={15}
              py={10}
              borderBottomWidth={1}
              borderBottomColor={"$borderapp"}
            >
              <XStack alignItems="center" gap={10}>
                <Avatar circular size="$3">
                  <Avatar.Image accessibilityLabel="Cam" src={defaulAvatar} />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Text ff={"$bold"}>
                  {item?.userProfile?.firstName} {item?.userProfile?.lastName} -{" "}
                  {item?.userProfile?.phone}
                </Text>
                <AppDetailContractsStatus
                  status={item.status}
                  type={item.type}
                />
              </XStack>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <Collapsible title={"Lịch sử thuê/mua căn hộ"}>
      {renderContent()}
    </Collapsible>
  );
}
