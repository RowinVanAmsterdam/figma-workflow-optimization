import * as designTokens from "../../design-tokens/generated/js/design-tokens";
import { Spacings } from "../assets/Spacings";

export const mapDesignTokensToTheme = (tokens: typeof designTokens) => {
    const headerFontFamily = `${tokens.FontFamiliesHeading}, "Helvetica Neue", Helvetica, Arial, sans-serif`;
    const bodyFontFamily = `${tokens.FontFamiliesBody}, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif`;

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
            gray: {
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
        font: {
            headings: headerFontFamily,
            body: bodyFontFamily,
        },
        typography: {
            header1: {
                fontFamily: headerFontFamily,
            	fontSize: "3.75rem", /* 60px */
                lineHeight: "1",
            },
            header2: {
                fontFamily: headerFontFamily,
                fontSize: "3rem", /* 48px */
                lineHeight: "1",
              },
              header3: {
                fontFamily: headerFontFamily,
                fontSize: "2.25rem", /* 36px */
                lineHeight: "2.5rem", /* 40px */
              },
              header4: {
                fontFamily: headerFontFamily,
                fontSize: "1.875rem", /* 30px */
                lineHeight: "2.25rem",  /* 36px */
              },
              header5: {
                fontFamily: headerFontFamily,
                fontSize: "1.5rem", /* 24px */
                lineHeight: " 2rem", /* 32px */
              },
              header6: {
                fontFamily: headerFontFamily,
                fontSize: "1.25rem", /* 20px */
                lineHeight: "1.75rem", /* 28px */
              }
        },
        breakpoints: {
            xs: "375",
            m: "768px",
            l: "1200px",
            xl: "1400px",
            xxl: "1920px",
        },
        spacings: Spacings
    };
};
