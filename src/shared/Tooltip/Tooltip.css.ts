import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const visible = style({
    opacity: 1,
    visibility: "visible",
});

export const cursorPointer = style({
    cursor: "pointer",
});

export const tooltipContainer = style({
    position: 'relative',
    overflow: 'visible',
  });

export const tooltip = style({
    position: "absolute",
    zIndex: 50,
    backgroundColor: vars.color.neutral[900],
    color: "white",
    padding: "0.5rem",
    borderRadius: "0.25rem", 
    display: "inline-block",
    whiteSpace: "nowrap",
    transition: "all 300ms ease-in-out",
});

export const tooltipArrowStyles = style({
    "::after": {
        content: '""',
        position: "absolute",
        borderWidth: "8px",
        borderStyle: "solid",
        borderColor: "transparent transparent #your-color transparent", // Replace with your color value
    },
});

export const positionStyles = {
    top: style({
        top: "auto",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginBottom: vars.spacings[3],
    }),
    right: style({
        top: "50%",
        right: "auto",
        bottom: "auto",
        left: "100%",
        transform: "translateY(-50%)",
        marginLeft: vars.spacings[3],
    }),
    bottom: style({
        top: "100%",
        right: "auto",
        bottom: "auto",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: vars.spacings[3],
    }),
    left: style({
        top: "50%",
        right: "100%",
        bottom: "auto",
        left: "auto",
        transform: "translateY(-50%)",
        marginRight: vars.spacings[3],
    }),
};

export const placementArrowStyles = {
    top: style({
        "::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: "100%",
            transform: "translateX(-50%)",
        },
    }),
    right: style({
        "::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            right: "100%",
            transform: "translateY(-50%) rotate(90deg)",
        },
    }),
    bottom: style({
        "::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: "100%",
            transform: "translateX(-50%) rotate(180deg)",
        },
    }),
    left: style({
        "::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "100%",
            transform: "translateY(-50%) rotate(-90deg)",
        },
    }),
};
