import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Collapsible } from "@/components/Collapsible";
import { TApt } from "@/utils";
import { XStack } from "tamagui";
import { devide_with } from "@/constants";

const image_width = (devide_with - 3 * 5) / 3;
type Props = Pick<TApt, "imageUrls">;
export function AptImages({ imageUrls }: Props) {
  console.log(imageUrls);
  if (!imageUrls) return null;
  return (
    <Collapsible title={"Hình ảnh căn hộ"}>
      <ScrollView
        horizontal
        contentContainerStyle={{gap: 5}}
        showsHorizontalScrollIndicator={false}
      >
        {imageUrls.map((item) => {
          console.log(item);
          return (
            <Image
              key={item}
              source={{ uri: item }}
              width={image_width}
              aspectRatio={1}
            />
          );
        })}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1723227300708-1ff74add4195?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          width={image_width}
          aspectRatio={1}
        />
      </ScrollView>
    </Collapsible>
  );
}
