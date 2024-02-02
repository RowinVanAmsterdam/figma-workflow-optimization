import * as designTokens from "../../design-tokens/generated/js/design-tokens";

export const getColors = (tokens: typeof designTokens) => {
    return {
        brand: {
            yellow: {
                100: tokens.ColorsBrandYellow100,
                200: tokens.ColorsBrandYellow200,
                300: tokens.ColorsBrandYellow300,
                400: tokens.ColorsBrandYellow400,
                500: tokens.ColorsBrandYellow500,
                600: tokens.ColorsBrandYellow600,
                700: tokens.ColorsBrandYellow700,
                800: tokens.ColorsBrandYellow800,
                900: tokens.ColorsBrandYellow900,
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
        white: tokens.ColorsWhite,
        black: tokens.ColorsBlack,
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
        orange: {
            100: tokens.ColorsOrange100,
            200: tokens.ColorsOrange200,
            300: tokens.ColorsOrange300,
            400: tokens.ColorsOrange400,
            500: tokens.ColorsOrange500,
            600: tokens.ColorsOrange600,
            700: tokens.ColorsOrange700,
            800: tokens.ColorsOrange800,
            900: tokens.ColorsOrange900,
        },
        yellow: {
            100: tokens.ColorsYellow100,
            200: tokens.ColorsYellow200,
            300: tokens.ColorsYellow300,
            400: tokens.ColorsYellow400,
            500: tokens.ColorsYellow500,
            600: tokens.ColorsYellow600,
            700: tokens.ColorsYellow700,
            800: tokens.ColorsYellow800,
            900: tokens.ColorsYellow900,
        },
        green: {
            100: tokens.ColorsGreen100,
            200: tokens.ColorsGreen200,
            300: tokens.ColorsGreen300,
            400: tokens.ColorsGreen400,
            500: tokens.ColorsGreen500,
            600: tokens.ColorsGreen600,
            700: tokens.ColorsGreen700,
            800: tokens.ColorsGreen800,
            900: tokens.ColorsGreen900,
        },
        teal: {
            100: tokens.ColorsTeal100,
            200: tokens.ColorsTeal200,
            300: tokens.ColorsTeal300,
            400: tokens.ColorsTeal400,
            500: tokens.ColorsTeal500,
            600: tokens.ColorsTeal600,
            700: tokens.ColorsTeal700,
            800: tokens.ColorsTeal800,
            900: tokens.ColorsTeal900,
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
        indigo: {
            100: tokens.ColorsIndigo100,
            200: tokens.ColorsIndigo200,
            300: tokens.ColorsIndigo300,
            400: tokens.ColorsIndigo400,
            500: tokens.ColorsIndigo500,
            600: tokens.ColorsIndigo600,
            700: tokens.ColorsIndigo700,
            800: tokens.ColorsIndigo800,
            900: tokens.ColorsIndigo900,
        },
        purple: {
            100: tokens.ColorsPurple100,
            200: tokens.ColorsPurple200,
            300: tokens.ColorsPurple300,
            400: tokens.ColorsPurple400,
            500: tokens.ColorsPurple500,
            600: tokens.ColorsPurple600,
            700: tokens.ColorsPurple700,
            800: tokens.ColorsPurple800,
            900: tokens.ColorsPurple900,
        },
        pink: {
            100: tokens.ColorsPink100,
            200: tokens.ColorsPink200,
            300: tokens.ColorsPink300,
            400: tokens.ColorsPink400,
            500: tokens.ColorsPink500,
            600: tokens.ColorsPink600,
            700: tokens.ColorsPink700,
            800: tokens.ColorsPink800,
            900: tokens.ColorsPink900,
        },
    };
};