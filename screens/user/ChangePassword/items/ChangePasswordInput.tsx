import { Colors } from "@/constants";
import { AppInputMask } from "@/elements";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = { name: string; label?: string; placeholder?: string };
export function ChangePasswordInput({ name, label, placeholder }: Props) {
  const { control } = useFormContext();
  const [isShowPass, setIsShowPass] = useState(false);
  const IconRight = { true: Eye, false: EyeOff }[`${isShowPass}`];
  const toogleShowPass = () => setIsShowPass(!isShowPass);

  return (
    <AppInputMask
      name={name}
      control={control}
      label={label}
      placeholder={placeholder}
      secureTextEntry={!isShowPass}
      iconRight={() => (
        <IconRight
          size={20}
          color={Colors.light.grey999}
          onPress={toogleShowPass}
          hitSlop={10}
        />
      )}
      rules={{ required: { value: true, message: "Không được bỏ trống" } }}
    />
  );
}
