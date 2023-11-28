import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const fontFamilyStyles = {
    headings: style({
        fontFamily: vars.font.headings,
    }),
    body: style({
        fontFamily: vars.font.body,
    }),
};

export const textStyles = {
    "text-xs": style({
        fontSize: '0.75rem',
        lineHeight: '1rem',
    }),
    "text-sm": style({
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
    }),
    "text-base": style({
        fontSize: '1rem',
        lineHeight: '1.5rem',
    }),
    "text-lg": style({
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
    }),
    "text-xl": style({
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
    }),
    "text-2xl": style({
        fontSize: '1.5rem',
        lineHeight: '2rem',
    }),
    "text-3xl": style({
        fontSize: '1.875rem',
        lineHeight: '2.25rem',
    }),
    "text-4xl": style({
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
    }),
    "text-5xl": style({
        fontSize: '3rem',
        lineHeight: '1',
    }),
    "text-6xl": style({
        fontSize: '3.75rem',
        lineHeight: '1',
    }),
    "text-7xl": style({
        fontSize: '4.5rem',
        lineHeight: '1',
    }),
    "text-8xl": style({
        fontSize: '6rem',
        lineHeight: '1',
    }),
    "text-9xl": style({
        fontSize: '8rem',
        lineHeight: '1',
    }),
};

export const fontWeightStyles = {
    light: style({
        fontWeight: 300,
    }),
    regular: style({
        fontWeight: 400,
    }),
    medium: style({
        fontWeight: 500,
    }),
    bold: style({
        fontWeight: 700,
    }),
};