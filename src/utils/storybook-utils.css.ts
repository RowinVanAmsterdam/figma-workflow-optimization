import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const separator = style({
  margin: `8px 0`,
  backgroundColor: vars.color.black,
});

export const blockWithDottedBorder = style({
  border: `1px dotted ${vars.color.black}`,
  marginBottom: "16px",
});

export const blockWithPaddingAndBackground = style({
  backgroundColor: "#D7D7D7",
  padding: "16px",
  minHeight: "500px",
});
