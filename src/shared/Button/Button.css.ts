import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const baseButton = style({
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid #d6d6d6',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    // padding: `${vars.spacings.md} ${vars.spacings.lg}`,
    // color: vars.color.button.color,
    // backgroundColor: vars.color.button.backgroundColor,
  
    // ':hover': {
    //   color: vars.color.button.hover.color,
    //   backgroundColor: vars.color.button.hover.backgroundColor
    // }
  });


export const primaryButton = style({
});