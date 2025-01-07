import { View, TouchableOpacity } from "react-native";
import React from "react";
import { AppInputMask } from "@/elements";
import { useController, useFormContext } from "react-hook-form";
import { ImageUp } from "@tamagui/lucide-icons";
import { pickImage } from "@/utils";
import { PickedImage } from "@/utils";
import { Image, YStack } from "tamagui";
import { devide_with } from "@/constants";

export function InputSelectThumnail() {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({
    control,
    name: "thumbnail",
    rules: { required: { value: true, message: "Không được để trống" } },
  });

  const onPress = async () => {
    try {
      const result = await pickImage("photo", false);
      console.log("result ~ ", result);
      onChange(result);
    } catch (error) {
      console.warn(error);
    }
  };
  const renderImages = () => {
    if (!value) return null;
    if (value && value?.length > 0) {
      return (
        <View>
          {(value as PickedImage[]).map((item) => (
            <Image
              source={{ uri: item.uri }}
              width={devide_with - 15 * 2}
              height={((devide_with - 15 * 2) * item.height) / item.width}
              borderRadius={12}
            />
          ))}
        </View>
      );
    }
  };
  return (
    <YStack gap={5}>
      <TouchableOpacity onPress={onPress}>
        <AppInputMask
          control={control}
          name="thumbnail"
          label="Thumnail"
          placeholder="Chọn hình ảnh"
          // disabled
          iconLeft={() => <ImageUp size={16} />}
        />
      </TouchableOpacity>
      {renderImages()}
    </YStack>
  );
}
