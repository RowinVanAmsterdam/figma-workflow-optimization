import { createThemeContract } from "@vanilla-extract/css";
import { Spacings } from "./assets/Spacings";

const colorShadeProperties = {
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
};

const headerProperties = {
    fontFamily: "",
    fontSize: "",
    lineHeight: "",
};

export const vars = createThemeContract({
    color: {
        black: "",
        white: "",
        red: colorShadeProperties,
        blue: colorShadeProperties,
        gray: colorShadeProperties,
        background: "",
        font: "",
        link: "",
        button: {
            color: "",
            backgroundColor: "",
            hover: {
                color: "",
                backgroundColor: "",
            },
        },
        divider: "",
    },
    font: {
        headings: "",
        body: "",
    },
    typography: {
        header1: headerProperties,
        header2: headerProperties,
        header3: headerProperties,
        header4: headerProperties,
        header5: headerProperties,
        header6: headerProperties,
    },
    breakpoints: {
        xs: "",
        m: "",
        l: "",
        xl: "",
        xxl: "",
    },
    spacings: Spacings
});
