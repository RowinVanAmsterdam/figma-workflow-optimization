import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const table = style({
    borderCollapse: "collapse",
    marginLeft: "auto",
    marginRight: "auto",
});

export const tableHeadRow = style({

    borderBottom: `2px solid ${vars.color.gray["300"]}`,
});

export const tableHeadCell = style({
    paddingBottom: vars.spacings[2],
    textAlign: "left",
});

export const tableHeadCellName = style({
    paddingRight: vars.spacings[8],
});

export const tableHeadCellSize = style({
    paddingRight: vars.spacings[20],
});

export const tableHeadCellPixels = style({
    paddingRight: vars.spacings[6],
});

export const tableRow = style({
    borderBottom: `1px solid ${vars.color.gray["300"]}`,
});

export const tableCell = style({
    fontSize: "14px",
    paddingTop: vars.spacings[1.5],
    paddingBottom: vars.spacings[1.5],
    color: vars.color.gray["700"],
});
