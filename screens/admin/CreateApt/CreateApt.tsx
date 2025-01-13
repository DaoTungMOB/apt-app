import React from "react";
import { useForm } from "react-hook-form";
import { AppContainer } from "@/elements";
import { CreateAptForm } from "./items/CreateAptForm";
import { CreateAptSubmit } from "./items/CreateAptSubmit";

export function CreateApt() {
  const forms = useForm();
  return (
    <AppContainer form={forms}>
      <CreateAptForm />
      <CreateAptSubmit />
    </AppContainer>
  );
}
