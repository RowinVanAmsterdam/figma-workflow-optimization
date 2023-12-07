import { createTheme, globalStyle } from "@vanilla-extract/css";
import { vars } from "./contract.css";
import * as designTokens from "../design-tokens/generated/js/design-tokens";
import { getTheme } from "./helpers/getTheme";
import "./reset.css.ts";

export const generatedTheme = createTheme(vars, getTheme(designTokens));
export const generatedDarkTheme = createTheme(vars, getTheme(designTokens));