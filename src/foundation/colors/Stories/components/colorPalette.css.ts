import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const colorPaletteGrid = style({
    display: "flex",
    marginBottom: vars.spacings[4],
    color: vars.color.neutral[600],
});

export const colorPaletteGridNameColumn = style({
    flex: "0 0 30%",
});

export const colorPaletteGridSwatchColumn = style({
    flexGrow: 1,
    display: "flex",
});
