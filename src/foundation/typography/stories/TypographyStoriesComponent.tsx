import { Typography, TypographyProps, defaultTypographyComponent, defaultTypographyVariant } from "../Typography";
import { useEffect, useRef, useState } from "react";
import * as styles from "../../typography-og/stories/typography.stories.css";

type TypographyExampleProps = {
    variant?: TypographyProps['variant'];
    component?: TypographyProps["component"];
    sampleText?: string;
    fontWeight?: TypographyProps["fontWeight"];
};

const fontProperties = (component: string, family: string, variant: string, size: string, lineHeight: any, ratio: any, fontWeight: string) =>
    `${component} - ${variant} - ${family} || Size: ${size}, Line-Height: ${lineHeight}, Ratio: ${ratio}, Weight: ${fontWeight}`;

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// 2 decimals
const roundValue = (value: number) => {
    return Math.round(value * 1e2) / 1e2;
};

export const TypographyStoriesComponent = (props: TypographyExampleProps) => {
    const { variant = defaultTypographyVariant, component = defaultTypographyComponent, sampleText, fontWeight } = props;
    const textRef = useRef<HTMLSpanElement>(null);
    // const { width } = useSize();
    const [fontLine, setFontLine] = useState("");

    const getFontProperties = (style: CSSStyleDeclaration) => {
        setFontLine(
            fontProperties(
                capitalizeFirstLetter(`${component}` || ""),
                style.fontFamily.replace(/"/g, "").split(",")[0] || "",
                variant,
                style.fontSize,
                style.lineHeight,
                roundValue(parseFloat(style.lineHeight) / parseFloat(style.fontSize)),
                style.fontWeight
            )
        );
    };

    useEffect(() => {
        if (textRef.current) {
            const style = getComputedStyle(textRef.current);
            getFontProperties(style);
        }
    }, [textRef.current]);

    return (
        <li>
            <Typography className={styles.typographySubtitle}>{fontLine}</Typography>
            <Typography variant={variant} component={component} ref={textRef} fontWeight={fontWeight}>
                {sampleText}
            </Typography>
        </li>
    );
};
