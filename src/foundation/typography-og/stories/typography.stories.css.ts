import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const typographyList = style({
    display: "flex", 
    flexDirection: "column",
    gap: vars.spacings[10],
    listStyle: "none",
});

export const typographySubtitle = style({
    color: vars.color.neutral["600"],
});