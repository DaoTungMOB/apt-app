import { devide_with } from "@/constants";
import React from "react";
import Swiper from "react-native-swiper";
import { Image, Text } from "tamagui";

const swiper_height = (devide_with * 2) / 4;
const data = [
  require("@/utils/images/swipper1.jpg"),
  require("@/utils/images/swipper2.jpg"),
];
export function HomeSwipper() {
  return (
    <Swiper
      width={devide_with}
      height={swiper_height}
      loop
      autoplay
      autoplayTimeout={2.5}
      horizontal
      pagingEnabled
      showsPagination
    >
      {data.map((item) => (
        <Image
          key={item}
          // source={{
          //   uri: item,
          //   width: devide_with,
          //   height: swiper_height,
          // }}
          source={item}
          width={devide_with}
          height={swiper_height}
        />
      ))}
    </Swiper>
  );
}
