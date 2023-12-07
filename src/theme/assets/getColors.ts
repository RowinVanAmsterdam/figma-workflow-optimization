import * as designTokens from "../../design-tokens/generated/js/design-tokens";

export const getColors = (tokens: typeof designTokens) => {
    return {
        brand: {
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
        },
        neutral: {
            100: tokens.ColorsGray100,
            200: tokens.ColorsGray200,
            300: tokens.ColorsGray300,
            400: tokens.ColorsGray400,
            500: tokens.ColorsGray500,
            600: tokens.ColorsGray600,
            700: tokens.ColorsGray700,
            800: tokens.ColorsGray800,
            900: tokens.ColorsGray900,
        },
    };
};
