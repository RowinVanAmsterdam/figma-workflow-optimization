import { Typography } from "@/foundation/typography/Typography";
import { Tooltip } from "@/shared/Tooltip/Tooltip";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { useState } from "react";
import * as styles from "./colorItem.css";
import { vars } from "@/theme/contract.css";

type ColorItemProps = {
    colorName: string;
    colorClass: string;
    colors: ColorProps[];
};

export type ColorProps = {
    name: string;
    value: string;
};

const defaultTooltipContent = "Click to copy";

export const ColorItem = (props: ColorItemProps) => {
    const { colorClass, colorName, colors } = props;
    const [tooltipContent, setTooltipContent] = useState<string>(defaultTooltipContent);
    const handleCopy = (colorValue: string) => {
        navigator.clipboard.writeText(colorValue);
        setTooltipContent("Copied");
    };

    return (
        <div className={styles.colorItem}>
            <div className={styles.colorItemNaming}>
                <Typography>{colorName}</Typography>
                <Typography variant="text-sm">{colorClass}</Typography>
            </div>

            <section className={styles.colorItemSwatches}>
                <ul className={styles.colorItemSwatchesList}>
                    {colors.map((color: ColorProps, index: number) => (
                        <li style={{ width: "100%" }}>
                            <Tooltip key={color.name} content={tooltipContent} onMouseLeave={() => setTooltipContent(defaultTooltipContent)}>
                                <div
                                    className={styles.swatchColorPane}
                                    style={{
                                        backgroundColor: color.value,
                                        ...(index === 0 && {
                                            borderTopLeftRadius: vars.spacings["1.5"],
                                            borderBottomLeftRadius: vars.spacings["1.5"],
                                        }),
                                        ...(index === colors.length - 1 && {
                                            borderTopRightRadius: vars.spacings["1.5"],
                                            borderBottomRightRadius: vars.spacings["1.5"],
                                        }),
                                    }}
                                    onClick={() => handleCopy(color.value)}
                                />

                                <Typography variant="text-xs" style={{ textAlign: "center" }}>{color.name}</Typography>
                            </Tooltip>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};
