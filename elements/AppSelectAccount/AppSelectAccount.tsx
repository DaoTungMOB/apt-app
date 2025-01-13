import { View } from "react-native";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { Text, XStack } from "tamagui";
import { AppTextLabel } from "../AppTextLabel";
import { AppTextError } from "../AppTextError";
import { useStyle } from "./modules/useStyle";
import { TAccount } from "@/utils";
import { appBottomSheetSelectAccountRef, BottomSheetListAccount } from "./items/BottomSheetListAccount";

type Props = UseControllerProps & {
  label?: string;
  placeholder: string;
};
export function AppSelectAccount({
  label,
  placeholder,
  ...useControllerProps
}: Props) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ ...useControllerProps });
  const { borderColor, backgroundColor } = useStyle({
    disabled: useControllerProps.disabled,
    error: !!error?.message,
  });
  const renderContent = () => {
    const account = value as TAccount | undefined | null;
 
    if (!account) return <Text>{placeholder}</Text>;
    return <Text>{account?.firstName} {account?.lastName} - {account?.phone}</Text>;
  };
  return (
    <React.Fragment>
      <View>
        <AppTextLabel label={label} pb={5} />
        <XStack
          onPress={() => appBottomSheetSelectAccountRef.current?.present()}
          alignItems="center"
          borderWidth={1}
          height={46}
          borderRadius={12}
          px={12}
          style={{ borderColor, backgroundColor }}
        >
          {renderContent()}
        </XStack>
        <AppTextError message={error?.message} />
      </View>
      <BottomSheetListAccount {...useControllerProps} />
    </React.Fragment>
  );
}
