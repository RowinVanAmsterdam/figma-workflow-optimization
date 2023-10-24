import { dimensions } from "@/theme/assets/dimensions.css";
import { style } from "@vanilla-extract/css";

export const baseButton = style({
    // padding: '8px 16px',
    padding: dimensions.sm,
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid #d6d6d6',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    // color: vars.color.button.color,
  
    // ':hover': {
    //   backgroundColor: vars.color.button.hover.backgroundColor,
    //   color: vars.color.button.hover.color
    // }
  });


export const primaryButton = style({
});