import { Colors } from "@/constants";
import { ViewStyle } from "react-native";

type Props = {
  iconLeft?: boolean;
  iconRight?: boolean;
  error?: boolean;
  disabled?: boolean;
};
type TStyles = Pick<
  ViewStyle,
  "borderColor" | "borderLeftWidth" | "borderRightWidth" | "backgroundColor"
>;

export function useStyleInput({ iconLeft, iconRight, disabled, error }: Props) {
  const styles: TStyles = { borderColor: Colors.light.borderapp };

  if (iconLeft) {
    styles["borderLeftWidth"] = 1;
  }
  if (iconRight) {
    styles["borderRightWidth"] = 1;
  }
  if (disabled) {
    styles["borderColor"] = Colors.light.grey;
    styles["backgroundColor"] = Colors.light.grey;
  }
  if (!disabled) styles["backgroundColor"] = Colors.light.background;
  if (!error) styles["borderColor"] = Colors.light.borderapp;
  if (error) styles["borderColor"] = Colors.light.red;

  return {
    borderColor: styles.borderColor,
    borderLeftWidth: styles.borderLeftWidth,
    borderRightWidth: styles.borderRightWidth,
    backgroundColor: styles.backgroundColor,
  };
}
