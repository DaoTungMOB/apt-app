import { View, TouchableOpacity } from "react-native";
import React from "react";
import { AppInputMask } from "@/elements";
import { useController, useFormContext } from "react-hook-form";
import { ImageUp } from "@tamagui/lucide-icons";
import { pickImage } from "@/utils";
import { PickedImage } from "@/utils";
import { Image, YStack } from "tamagui";
import { devide_with } from "@/constants";
import { UseControllerProps } from "react-hook-form";

type Props = { defaultImages?: string[] } & UseControllerProps;
export function InputSelectThumnail({ defaultImages, rules }: Props) {
  // console.log("defaultImages ~ ", defaultImages);
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({
    control,
    name: "thumbnail",
    rules,
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
  const renderDefaultImage = () => {
    if (!defaultImages || value) return null;
    return (
      <View>
        {defaultImages.map((item) => (
          <Image
            key={item}
            source={{ uri: item }}
            height={((devide_with - 15 * 2) * 3) / 4}
            width={devide_with - 15 * 2}
            borderRadius={12}
          />
        ))}
      </View>
    );
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
      {renderDefaultImage()}
      {renderImages()}
    </YStack>
  );
}
