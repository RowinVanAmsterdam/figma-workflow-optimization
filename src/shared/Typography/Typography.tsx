import { mergeClassNames } from "@/utils/mergeClassNames";

type TypographyProps = {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    component?: React.ElementType;
    className?: string;
};

const getVariantElement = (variant: TypographyProps['variant']) => {
    switch (variant) {
        case 'h1':
            return 'h1';
        case 'h2':
            return 'h2';
        case 'h3':
            return 'h3';
        case 'h4':
            return 'h4';
        case 'h5':
            return 'h5';
        case 'h6':
            return 'h6';
        default:
            return 'p';
    }
};

export const Typography = (props: TypographyProps) => {
    const { children, variant, component, className } = props;
    const Component = component ? component : getVariantElement(variant);

    return <Component className={mergeClassNames(variant, className)}>{children}</Component>;
};
