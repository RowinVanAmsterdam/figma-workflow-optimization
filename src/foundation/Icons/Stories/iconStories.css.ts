import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const iconList = style({
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: vars.spacings["2"],
});

export const iconListItem = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

export const icon = style({
    boxSizing: "content-box",
    width: vars.spacings["6"],
    height: vars.spacings["6"],
    padding: vars.spacings["4"],
    flexShrink: 0,
    borderRadius: "4px",
    transition: 'background-color 0.3s ease-in-out',

    ":hover": {
        backgroundColor: vars.color.neutral[100],
    },
});
