import { Suspense, lazy, useMemo, useState } from "react";
import { Tooltip } from "@/shared/Tooltip/Tooltip";
import { Typography } from "../../typography/Typography";
import * as styles from "./iconStories.css";

export const IconStoriesComponent = (iconName: string) => {
    const Icon = useMemo(
        () => lazy(() => import(`../tsx/${iconName}`).then((module) => ({ default: module[iconName] }))),
        [iconName]
    );
    const defaultTooltipContent = "Click to copy";
    const [tooltipContent, setTooltipContent] = useState<string>(defaultTooltipContent);
    const handleCopy = () => {
        navigator.clipboard.writeText(`<${iconName} />`);
        setTooltipContent("Copied");
    }

    return (
        <Suspense key={iconName} fallback={<div>Loading...</div>}>
            <Tooltip placement="top" content={tooltipContent} onMouseLeave={() => setTooltipContent(defaultTooltipContent)} >
                <li className={styles.iconListItem}>
                    <Icon
                        onClick={handleCopy}
                        className={styles.icon}
                    />
                    <Typography variant="text-xs">{iconName}</Typography>
                </li>
            </Tooltip>
        </Suspense>
    );
};