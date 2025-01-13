import { Colors } from "@/constants";
import React from "react";
import { Text, View } from "tamagui";
import { ListContactItemUserInfo } from "./ListContactItemUserInfo";
import { useRouter } from "expo-router";
import { TContact } from "@/utils";

type Props = { contact: TContact };
export function ListContactItem({ contact }: Props) {
  const router = useRouter();
  return (
    <View
      // onPress={() =>
      //   router.push({
      //     pathname: "/(tabs_admin)/contact/contactDetail",
      //     params: { contactId: contact._id },
      //   })
      // }
      gap={5}
      borderBottomWidth={1}
      borderBottomColor={Colors.light.borderapp}
      py={15}
    >
      <ListContactItemUserInfo />
      <Text>
        <Text ff={"$bold"}>Liên hệ email:</Text> {contact.email}
      </Text>
      <Text>
        <Text ff={"$bold"}>Liên hệ Sdt:</Text> {contact.phone}
      </Text>
      <Text numberOfLines={1}>
        <Text ff={"$bold"}>Lời nhắn:</Text> Using the same base component
        TextInput, from React Native or React Native Web , Tamagui simply wraps
        these components to allow the full set of style props, as well as
        scaling all the styles up or down using the size property, much like
        Button.
      </Text>
    </View>
  );
}
