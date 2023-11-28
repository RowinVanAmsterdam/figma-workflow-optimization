import { mergeClassNames } from "@/utils/mergeClassNames";
import { bold, header1, header2, header3, header4, header5, header6, light, medium, regular } from "./typography.css";
import { forwardRef } from "react";

export type TypographyProps = {
    children: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    component?: React.ElementType;
    className?: string;
    fontWeight?: "light" | "regular" | "medium" | "bold";
    ref?: React.Ref<HTMLElement>;
};

type ClassNamesKey = NonNullable<TypographyProps["variant"]>;

export const defaultTypographyVariant: ClassNamesKey = "p";

const classNamesRecord: Record<ClassNamesKey, string> = {
    h1: header1,
    h2: header2,
    h3: header3,
    h4: header4,
    h5: header5,
    h6: header6,
    p: regular,
};

const getFontWeightClass = (variant: TypographyProps["fontWeight"]) => {
    switch (variant) {
        case "light":
            return light;
        case "medium":
            return medium;
        case "bold":
            return bold;
        default:
            return regular;
    }
};

export const Typography = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
    const { children, variant = "p", component, className, fontWeight } = props;
    const Component = component ? component : variant;
    const variantClass = classNamesRecord[Component as ClassNamesKey] ?? "";
    const classNames = mergeClassNames(className, variantClass, getFontWeightClass(fontWeight));

    return <Component className={classNames} ref={ref}>{children}</Component>;
});
