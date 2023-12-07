import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const table = style({
    borderCollapse: "collapse",
    marginLeft: "auto",
    marginRight: "auto",
});

export const tableHeadRow = style({
    borderBottom: `2px solid ${vars.color.neutral["300"]}`,
});

export const tableHeadCell = style({
    paddingBottom: vars.spacings[2],
    textAlign: "left",
    paddingRight: vars.spacings[10],
});

export const tableRow = style({
    borderBottom: `1px solid ${vars.color.neutral["300"]}`,
});

export const tableCell = style({
    fontSize: "14px",
    paddingTop: vars.spacings[1.5],
    paddingBottom: vars.spacings[1.5],
    color: vars.color.neutral["700"],
});
