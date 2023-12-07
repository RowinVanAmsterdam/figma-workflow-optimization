import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./contract.css";

globalStyle("*", {
    boxSizing: "border-box",
    fontFamily: vars.font.body,
    margin: 0,
    padding: 0,
});
