import { devide_with } from "@/constants";
import React from "react";
import Swiper from "react-native-swiper";
import { Image, Text } from "tamagui";

const swiper_height = (devide_with * 2) / 4;
const data = [
  "https://images.unsplash.com/photo-1728065849941-a0b71dc635d5?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1733003538531-b835a5f9f224?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1732980512649-fee10a5c556c?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          source={{
            uri: item,
            width: devide_with,
            height: swiper_height,
          }}
        />
      ))}
    </Swiper>
  );
}
