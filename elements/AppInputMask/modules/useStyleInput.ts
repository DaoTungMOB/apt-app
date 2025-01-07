import { Colors } from "@/constants";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  iconLeft?: boolean;
  iconRight?: boolean;
  error?: boolean;
  disabled?: boolean;
};
type TBorderStyles = Pick<
  ViewStyle,
  | "borderColor"
  | "borderRadius"
  | "borderTopLeftRadius"
  | "borderTopRightRadius"
  | "borderBottomLeftRadius"
  | "borderBottomRightRadius"
>;
type TBackgroundStyles = Pick<ViewStyle, "backgroundColor">;

export function useStyleInput({ iconLeft, iconRight, disabled, error }: Props) {
  const borderStyle: TBorderStyles = { borderRadius: 12 };
  const backgroundStyle: TBackgroundStyles = {
    backgroundColor: Colors.light.background,
  };
  if (disabled) {
    backgroundStyle["backgroundColor"] = Colors.light.grey;
    borderStyle["borderColor"] = Colors.light.grey;
  }
  if (!error) borderStyle["borderColor"] = Colors.light.borderapp;
  if (error) borderStyle["borderColor"] = Colors.light.red;

  if (iconLeft) {
    borderStyle["borderBottomLeftRadius"] = 0;
    borderStyle["borderTopLeftRadius"] = 0;
  }
  if (iconRight) {
    borderStyle["borderBottomRightRadius"] = 0;
    borderStyle["borderTopRightRadius"] = 0;
  }

  return { ...backgroundStyle, ...borderStyle };
}
