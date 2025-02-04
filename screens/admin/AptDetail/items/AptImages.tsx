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
        contentContainerStyle={{ gap: 5 }}
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
      </ScrollView>
    </Collapsible>
  );
}
