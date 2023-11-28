import { mergeClassNames } from "@/utils/mergeClassNames";
import { forwardRef } from "react";
import * as styles from "./typography.css";

export type TypographyProps = {
    children: React.ReactNode;
    variant?: keyof typeof styles.textStyles;
    component?: React.ElementType;
    className?: string;
    fontWeight?: "light" | "regular" | "medium" | "bold";
    ref?: React.Ref<HTMLElement>;
};

type ClassNamesKey = NonNullable<TypographyProps["variant"]>;
type ComponentKey = NonNullable<TypographyProps["component"]>;
type VariantKey = NonNullable<TypographyProps["variant"]>;

export const defaultTypographyVariant: ClassNamesKey = "text-base";
export const defaultTypographyComponent: TypographyProps["component"] = "p";

const classNamesRecord: Record<ClassNamesKey, string> = {
    "text-xs": styles.textStyles["text-xs"],
    "text-sm": styles.textStyles["text-sm"],
    "text-base": styles.textStyles["text-base"],
    "text-lg": styles.textStyles["text-lg"],
    "text-xl": styles.textStyles["text-xl"],
    "text-2xl": styles.textStyles["text-2xl"],
    "text-3xl": styles.textStyles["text-3xl"],
    "text-4xl": styles.textStyles["text-4xl"],
    "text-5xl": styles.textStyles["text-5xl"],
    "text-6xl": styles.textStyles["text-6xl"],
    "text-7xl": styles.textStyles["text-7xl"],
    "text-8xl": styles.textStyles["text-8xl"],
    "text-9xl": styles.textStyles["text-9xl"],
};

const headingKeys: Array<ComponentKey> = ["h1", "h2", "h3", "h4", "h5", "h6"];
const fontFamilyRecord: Record<VariantKey, string> = {
  ...Object.fromEntries(headingKeys.map(key => [key, styles.fontFamilyStyles.headings])),
  p: styles.fontFamilyStyles.body,
};

const getFontWeightClass = (variant: TypographyProps["fontWeight"]) => {
    switch (variant) {
        case "light":
            return styles.fontWeightStyles.light;
        case "medium":
            return styles.fontWeightStyles.medium;
        case "bold":
            return styles.fontWeightStyles.bold;
        default:
            return styles.fontWeightStyles.regular;
    }
};

export const Typography = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
    const { children, variant = defaultTypographyVariant, component, className, fontWeight } = props;
    const Component = component ? component : defaultTypographyComponent;
    const variantClass = classNamesRecord[variant as ClassNamesKey] ?? "";
    const fontFamilyClass = fontFamilyRecord[Component as VariantKey] ?? "";
    const classNames = mergeClassNames(className, variantClass, fontFamilyClass, getFontWeightClass(fontWeight));

    return (
        <Component className={classNames} ref={ref}>
            {children}
        </Component>
    );
});
