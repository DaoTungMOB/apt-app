import { Colors } from "@/constants";
import React from "react";
import { Text, View } from "tamagui";
import { ListContactItemUserInfo } from "./ListContactItemUserInfo";
import { useRouter } from "expo-router";
import { TContact } from "@/utils";
import dayjs = require("dayjs");

type Props = { contact: TContact };
export function ListContactItem({ contact }: Props) {
  console.log('contact ~ ', contact)
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
      {/* <ListContactItemUserInfo /> */}
      <Text>
        <Text ff={"$bold"}>Liên hệ email:</Text> {contact.email}
      </Text>
      <Text>
        <Text ff={"$bold"}>Liên hệ Sdt:</Text> {contact.phone}
      </Text>
      <Text >
        <Text ff={"$bold"}>Ngày liên hệ:</Text> {dayjs(contact.createdAt).format('DD/MM/YYYY')}
      </Text>
      <Text >
        <Text ff={"$bold"}>Lời nhắn:</Text> {contact.content}
      </Text>
    </View>
  );
}
