import { Colors } from "@/constants";
import { ViewStyle } from "react-native";

type TStyles = Pick<ViewStyle, "borderColor" | "backgroundColor">;
export function useStyle({
  disabled,
  error,
}: {
  disabled: boolean;
  error: boolean;
}) {
  const styles: TStyles = { borderColor: Colors.light.borderapp };

  if (disabled) {
    styles["borderColor"] = Colors.light.grey;
    styles["backgroundColor"] = Colors.light.grey;
  }
  if (!disabled) styles["backgroundColor"] = Colors.light.background;
  if (!error) styles["borderColor"] = Colors.light.borderapp;
  if (error) styles["borderColor"] = Colors.light.red;

  return {
    borderColor: styles.borderColor,
    backgroundColor: styles.backgroundColor,
  };
}
