import { createThemeContract } from "@vanilla-extract/css";
import { fonts } from "./assets/fonts.css";

const colorShades = {
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

export const vars = createThemeContract({
    color: {
        black: "",
        white: "",
        red: colorShades,
        blue: colorShades,
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
    font: fonts,
    spacings: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
    },
});
