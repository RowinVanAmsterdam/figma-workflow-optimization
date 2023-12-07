import { createTheme, globalStyle } from "@vanilla-extract/css";
import { vars } from "./contract.css";
import * as designTokens from "../design-tokens/generated/js/design-tokens";
import { getTheme } from "./helpers/getTheme";

export const generatedTheme = createTheme(vars, getTheme(designTokens));
export const generatedDarkTheme = createTheme(vars, getTheme(designTokens));

globalStyle("*", {
    boxSizing: "border-box",
    fontFamily: vars.font.body,
    margin: 0,
    padding: 0,
});
