import { Typography } from "@/foundation/typography/Typography";
import { colorCard, headerBackground, headerTitleWrapper } from "./colorCards.css";
import { Tooltip } from "@/shared/Tooltip/Tooltip";
import { useState } from "react";

type ColorCardProps = {
    title: string;
    valueToCopy?: string;
    color: string;
};

export const ColorCard = (props: ColorCardProps) => {
    const { title, color, valueToCopy } = props;
    const defaultTooltipContent = "Click to copy";
    const [tooltipContent, setTooltipContent] = useState<string>(defaultTooltipContent);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${valueToCopy ? valueToCopy : color}`);
        setTooltipContent("Copied");
    };

    return (
        <Tooltip placement="top" content={tooltipContent} onMouseLeave={() => setTooltipContent(defaultTooltipContent)}>
            <div className={colorCard} onClick={handleCopy}>
                <div className={headerTitleWrapper}>
                    <Typography fontWeight="bold" variant="text-sm">
                        {title}
                    </Typography>
                    <Typography variant="text-sm">{color}</Typography>
                </div>
                <div>
                    <div className={headerBackground} style={{ backgroundColor: color }}></div>
                </div>
            </div>
        </Tooltip>
    );
};
