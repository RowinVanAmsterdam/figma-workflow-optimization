import { Typography } from "@/foundation/typography/Typography";
import { colorCard, headerBackground, headerTitleWrapper } from "./colorCards.css";
import { Tooltip } from "@/shared/Tooltip/Tooltip";
import { useState } from "react";

type ColorCardProps = {
    title: string;
    subtitle?: string;
    color: string;
    dark?: boolean;
};

export const ColorCard = (props: ColorCardProps) => {
    const { title, subtitle, color } = props;
    const defaultTooltipContent = "Click to copy";
    const [tooltipContent, setTooltipContent] = useState<string>(defaultTooltipContent);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${color}`);
        setTooltipContent("Copied");
    };

    return (
        <Tooltip placement="top" content={tooltipContent} onMouseLeave={() => setTooltipContent(defaultTooltipContent)}>
            <div className={colorCard} onClick={handleCopy}>
                <div className={headerTitleWrapper}>
                    <Typography fontWeight="bold" variant="text-sm">
                        {title}
                    </Typography>
                    <Typography>{subtitle}</Typography>
                </div>
                <div>
                    <div className={headerBackground} style={{ backgroundColor: color }}></div>
                </div>
            </div>
        </Tooltip>
    );
};
