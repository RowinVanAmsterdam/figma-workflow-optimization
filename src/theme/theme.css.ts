import { createTheme, globalStyle } from '@vanilla-extract/css';
import { vars } from './contract.css';
import { mapDesignTokensToTheme } from './helpers/mapDesignTokensToTheme';
import * as designTokens from '../design-tokens/generated/js/design-tokens';

export const generatedTheme = createTheme(vars, mapDesignTokensToTheme(designTokens) );
export const generatedDarkTheme = createTheme(vars, mapDesignTokensToTheme(designTokens) );

globalStyle("*", {
    boxSizing: "border-box",
    fontFamily: vars.font.body,
    margin: 0,
    padding: 0,
  });