import { Colors } from "@/constants";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = React.PropsWithChildren<{ form: UseFormReturn }>;

export function AppContainer(props: Props) {
  const { children, form } = props;
  const Container = {
    true: FormProvider,
    false: React.Fragment,
  }[`${!!form}`];
  return (
    <SafeAreaView style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <Container {...form}>{children}</Container>
    </SafeAreaView>
  );
}
