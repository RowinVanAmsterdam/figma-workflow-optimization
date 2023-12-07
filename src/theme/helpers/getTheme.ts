import * as designTokens from "../../design-tokens/generated/js/design-tokens";
import { breakpoints } from "../assets/breakpoints";
import { getColors } from "../assets/getColors";
import { spacings } from "../assets/spacings";
import { font, typography } from "../assets/typography";

export const getTheme = (themeTokens: typeof designTokens) => {
    return {
        color: getColors(themeTokens),
        font: font,
        typography: typography,
        breakpoints: breakpoints,
        spacings: spacings,
    };
};