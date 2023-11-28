import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const base = style({
    fontFamily: vars.font.body,
});

export const header1 = style([
    base,
    {
        ...vars.typography.header1,
    },
]);

export const header2 = style([
    base,
    {
        ...vars.typography.header2,
    },
]);

export const header3 = style([
    base,
    {
        ...vars.typography.header3,
    },
]);

export const header4 = style([
    base,
    {
        ...vars.typography.header4,
    },
]);

export const header5 = style([
    base,
    {
        ...vars.typography.header5,
    },
]);

export const header6 = style([
    base,
    {
        ...vars.typography.header6,
    },
]);

export const light = style({
    fontWeight: 300,
});

export const regular = style({
    fontWeight: 400,
});

export const medium = style({
    fontWeight: 500,
});

export const bold = style({
    fontWeight: 700,
});
