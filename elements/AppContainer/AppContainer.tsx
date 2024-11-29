import { View, Text } from "react-native";
import React from "react";
import { FormProvider, FormProviderProps } from "react-hook-form";
import { Colors } from "@/constants/Colors";
import {} from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleProp } from "react-native";
import { ViewStyle } from "react-native";

type Props = React.PropsWithChildren<
  FormProviderProps & { style: StyleProp<ViewStyle> }
>;

export function AppContainer(props: Props) {
  const { style, children, ...methods } = props;
  const { top } = useSafeAreaInsets();
  return (
    <FormProvider {...methods}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: Colors.light.background,
            paddingTop: top,
          },
          style,
        ]}
      >
        {children}
      </View>
    </FormProvider>
  );
}
