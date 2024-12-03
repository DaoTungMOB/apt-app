import { config } from "@tamagui/config";
import { createTamagui, createTokens } from "tamagui";
import { Colors } from "./constants";
import { tokens as defaultTokens, themes } from "@tamagui/themes";

const tokens = createTokens({ ...defaultTokens, color: Colors.light });

export const tamaguiConfig = createTamagui({ ...config, tokens, themes });

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
