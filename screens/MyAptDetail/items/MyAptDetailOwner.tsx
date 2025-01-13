import { Collapsible } from "@/components/Collapsible";
import { Colors } from "@/constants";
import { AptInformation } from "@/screens/admin/AptDetail/items/AptInformation";
import { TApt } from "@/utils";
import { Avatar, Text, View, XStack } from "tamagui";


type Props = Pick<TApt, "userProfile" | "status" | "userId">;

const defaulAvatar = require("@/utils/images/th.jpg");

export function MyAptDetailOwner({ status, userProfile, userId }: Props) {

  
  const renderLabel = () => {
    if (status === "rented") return "Người thuê:";
    if (status === "sold") return "Nguời mua:";
    return "Chưa có người thuê/mua";
  };
  const renderContent = () => {
    if (!userId)
      return null;
    return (
      <View>
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
