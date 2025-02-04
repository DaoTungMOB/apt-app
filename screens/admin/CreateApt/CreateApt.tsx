import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AppContainer } from "@/elements";
import { CreateAptForm } from "./items/CreateAptForm";
import { CreateAptSubmit } from "./items/CreateAptSubmit";
import { View } from "tamagui";
import { Colors } from "@/constants";

export function CreateApt() {
  const forms = useForm();
  return (
    <FormProvider {...forms}>
      <View style={{ padding: 15, paddingBottom: 0, backgroundColor: Colors.light.background , flex : 1}}>
        <CreateAptForm />
        <CreateAptSubmit />
      </View>
    </FormProvider>
  );
}
