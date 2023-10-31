import * as designTokens from "../../../output/js/transformed-tokens";
import { fonts } from "../assets/fonts.css";

export const mapDesignTokensToTheme = (tokens: typeof designTokens) => {
    return {
        color: {
            black: tokens.ColorsBlack,
            white: tokens.ColorsWhite,
            red: {
                100: tokens.ColorsRed100,
                200: tokens.ColorsRed200,
                300: tokens.ColorsRed300,
                400: tokens.ColorsRed400,
                500: tokens.ColorsRed500,
                600: tokens.ColorsRed600,
                700: tokens.ColorsRed700,
                800: tokens.ColorsRed800,
                900: tokens.ColorsRed900,
            },
            blue: {
                100: tokens.ColorsBlue100,
                200: tokens.ColorsBlue200,
                300: tokens.ColorsBlue300,
                400: tokens.ColorsBlue400,
                500: tokens.ColorsBlue500,
                600: tokens.ColorsBlue600,
                700: tokens.ColorsBlue700,
                800: tokens.ColorsBlue800,
                900: tokens.ColorsBlue900,
            },
            background: tokens.BgDefault,
            font: tokens.FgDefault,
            link: tokens.AccentDefault,
            button: {
                color: tokens.ButtonPrimaryText,
                backgroundColor: tokens.ButtonPrimaryBackground,
                hover: {
                    color: tokens.AccentDefault,
                    backgroundColor: tokens.AccentBg,
                },
            },
            divider: "linear-gradient(180deg,#e6e6e6 0,#e6e6e6 48%,#fff)",
        },
        font: fonts,
        spacings: {
            xs: designTokens.SpacingXs,
            sm: designTokens.SpacingSm,
            md: designTokens.SpacingMd,
            lg: designTokens.SpacingLg,
            xl: designTokens.SpacingXl,
        },
    };
};
