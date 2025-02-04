import { config } from "@tamagui/config";
import { createFont, createTamagui, createTokens } from "tamagui";
import { Colors } from "./constants";
import { tokens as defaultTokens, themes } from "@tamagui/themes";

const tokens = createTokens({ ...defaultTokens, color: Colors.light });

export const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes,
  fonts: {
    body: createFont({
      family: "Nunito",
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20, // Đảm bảo không bỏ sót bất kỳ cấp độ nào bạn sử dụng
        6: 24,
        7: 28,
      },
      defaultSize: 7,
    }),
    medium: createFont({
      family: "NunitoMedium",
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20, // Đảm bảo không bỏ sót bất kỳ cấp độ nào bạn sử dụng
        6: 24,
        7: 28,
      },
      defaultSize: 4,
    }),
    semiBold: createFont({
      family: "NunitoSemiBold",
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20, // Đảm bảo không bỏ sót bất kỳ cấp độ nào bạn sử dụng
        6: 24,
        7: 28,
      },
      defaultSize: 4,
    }),
    bold: createFont({
      family: "NunitoBold",
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20, // Đảm bảo không bỏ sót bất kỳ cấp độ nào bạn sử dụng
        6: 24,
        7: 28,
      },
      defaultSize: 4,
    }),
  },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
