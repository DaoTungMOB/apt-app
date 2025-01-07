import { TouchableOpacity, View } from "react-native";
import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Image, XStack, YStack } from "tamagui";
import { AppInputMask } from "@/elements";
import { devide_with } from "@/constants";
import { PickedImage, pickImage } from "@/utils";
import { ImageUp } from "@tamagui/lucide-icons";

const imageWidth = (devide_with - 15 * 2 - 5.5 * 2) / 3;
export function InputSelectImages() {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ control, name: "imageUrls", rules: {required: {value: true, message: 'Không được để trống'}} });

  const onPress = async () => {
    try {
      const result = await pickImage("photo", true);
      onChange(result);
    } catch (error) {
      console.warn(error);
    }
  };
  const renderImages = () => {
    if (!value) return null;
    if (value && value?.length > 0) {
      return (
        <XStack alignItems="center" gap={5} flexWrap="wrap">
          {(value as PickedImage[]).map((item) => (
            <Image key={item.uri}
              source={{ uri: item.uri }}
              width={imageWidth}
              height={imageWidth}
              flexShrink={0}
              borderRadius={12}
            />
          ))}
        </XStack>
      );
    }
  };
  return (
    <YStack gap={5}>
      <TouchableOpacity onPress={onPress}>
        <AppInputMask
          control={control}
          name="imageUrls"
          label="Hình ảnh căn hộ"
          placeholder="Chọn hình ảnh"
          // disabled
          iconLeft={() => <ImageUp size={16} />}
        />
      </TouchableOpacity>
      {renderImages()}
    </YStack>
  );
}
