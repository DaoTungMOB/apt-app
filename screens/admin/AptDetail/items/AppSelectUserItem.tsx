import { TAccountResponse } from "@/utils";
import { Avatar, Checkbox, Text, useFormContext, XStack } from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { useController } from "react-hook-form";

type Props = Pick<TAccountResponse, "userProlile">;
export default function AppSelectUserItem({ userProlile }: Props) {
  const {
    field: { value, onChange },
  } = useController({ name: "userId" });
  const onPress = () => onChange(userProlile?._id);
  return (
    <XStack
      onPress={onPress}
      backgroundColor={"#eeeeee"}
      borderRadius={12}
      px={20}
      py={15}
      alignItems="center"
      gap={10}
    >
      <Checkbox
        size={"$6"}
        checked={value === userProlile?._id}
        onPress={onPress}
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
        {userProlile?.firstName} {userProlile?.lastName} - {userProlile?.phone}
      </Text>
    </XStack>
  );
}
