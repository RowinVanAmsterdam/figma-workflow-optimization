"use client";

import { Typography } from "@/foundation/typography/Typography";
import { mergeClassNames } from "@/utils/mergeClassNames";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import * as styles from "./Tooltip.css";

type TooltipProps = {
    children: ReactNode;
    content: ReactNode;
    placement?: "top" | "right" | "bottom" | "left";
    triggerType?: "hover" | "click" | "none";
    onHide?: () => void;
    onShow?: () => void;
    onToggle?: (isVisible: boolean) => void;
    arrow?: boolean;
    onMouseLeave?: () => void;
};

export const Tooltip = (props: TooltipProps) => {
    const { children, content, placement = "top", triggerType = "hover", onHide, onShow, onToggle, arrow, onMouseLeave } = props;
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const cursorClass = triggerType !== "none" ? styles.cursorPointer : undefined;
    type PlacementKey = NonNullable<TooltipProps["placement"]>;

    const handleTrigger = () => {
        setIsVisible((prev) => !prev);

        if (isVisible) {
            onHide && onHide();
        } else {
            onShow && onShow();
        }

        onToggle && onToggle(!isVisible);
    };

    const handleMouseLeave = () => {
        handleTrigger();
        onMouseLeave && onMouseLeave();
    };

    const placementRecord: Record<PlacementKey, string> = {
        top: styles.positionStyles.top,
        right: styles.positionStyles.right,
        bottom: styles.positionStyles.bottom,
        left: styles.positionStyles.left,
    };

    const placementArrowRecord: Record<PlacementKey, string> = {
        top: styles.placementArrowStyles.top,
        right: styles.placementArrowStyles.right,
        bottom: styles.placementArrowStyles.bottom,
        left: styles.placementArrowStyles.left,
    };

    const tooltipClasses = mergeClassNames(
        styles.tooltip,
        placementRecord[placement] ?? undefined,
        isVisible ? styles.visible : undefined
    );

    const tooltipArrowClasses = mergeClassNames(
        styles.tooltipArrowStyles,
        placementArrowRecord[placement] ?? undefined
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
                setIsVisible(false);
                onHide && onHide();
                onToggle && onToggle(false);
            }
        };

        if (isVisible && triggerType === "click") {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, onHide, onToggle, triggerType]);

    return (
        <span className={styles.tooltipContainer} ref={triggerRef}>
            <span
                className={cursorClass}
                onClick={triggerType === "click" ? handleTrigger : undefined}
                onMouseEnter={triggerType === "hover" ? handleTrigger : undefined}
                onMouseLeave={triggerType === "hover" ? handleMouseLeave : undefined}>
                {children}
            </span>

            {isVisible && (
                <span className={tooltipClasses}>
                    {arrow && <div className={tooltipArrowClasses} />}
                    <Typography variant="text-xs">{content}</Typography>
                </span>
            )}
        </span>
    );
};
