import { createThemeContract } from "@vanilla-extract/css";
import * as designTokens from "../design-tokens/generated/js/design-tokens";
import { getTheme } from "./helpers/getTheme";

export const vars = createThemeContract(getTheme(designTokens));
