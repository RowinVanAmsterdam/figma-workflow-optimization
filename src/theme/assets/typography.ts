import * as designTokens from "../../design-tokens/generated/js/design-tokens";

const headerFontFamily = `${designTokens.FontFamiliesHeading}, "Helvetica Neue", Helvetica, Arial, sans-serif`;
const bodyFontFamily = `${designTokens.FontFamiliesBody}, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif`;

export const font = {
    headings: headerFontFamily,
    body: bodyFontFamily,
};

export const typography = {
    header1: {
        fontFamily: headerFontFamily,
        fontSize: "3.75rem" /* 60px */,
        lineHeight: "1",
    },
    header2: {
        fontFamily: headerFontFamily,
        fontSize: "3rem" /* 48px */,
        lineHeight: "1",
    },
    header3: {
        fontFamily: headerFontFamily,
        fontSize: "2.25rem" /* 36px */,
        lineHeight: "2.5rem" /* 40px */,
    },
    header4: {
        fontFamily: headerFontFamily,
        fontSize: "1.875rem" /* 30px */,
        lineHeight: "2.25rem" /* 36px */,
    },
    header5: {
        fontFamily: headerFontFamily,
        fontSize: "1.5rem" /* 24px */,
        lineHeight: " 2rem" /* 32px */,
    },
    header6: {
        fontFamily: headerFontFamily,
        fontSize: "1.25rem" /* 20px */,
        lineHeight: "1.75rem" /* 28px */,
    },
};
