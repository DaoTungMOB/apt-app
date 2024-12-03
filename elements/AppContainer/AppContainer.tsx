import React from "react";
import { FormProvider, FormProviderProps } from "react-hook-form";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack, YStackProps } from "tamagui";

type Props = React.PropsWithChildren<
  FormProviderProps & { yStackProps: YStackProps }
>;

export function AppContainer(props: Props) {
  const { yStackProps, children, ...methods } = props;
  const { top } = useSafeAreaInsets();
  return (
    <FormProvider {...methods}>
      <YStack flex={1} bg={"#fff"} pt={top} px={15} {...yStackProps} >
        {children}
      </YStack>
    </FormProvider>
  );
}
