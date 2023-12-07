import { Meta, StoryObj } from "@storybook/react";
import { ColorCard } from "../ColorCard";
import { vars } from "@/theme/contract.css";
import { Typography } from "../../typography/Typography";
import { mb10, mb2, mb4 } from "../../spacing/margin.css";
import { StoryHeader } from "@/shared/Stories/StoryHeader";
import { ColorPalette } from "./components/ColorPalette";
import { ColorItem, ColorProps } from "./components/ColorItem";

const meta: Meta = {
    title: "Foundation/Colors",
};

export default meta;

type Story = StoryObj<any>;

type ColorPaletteProps = {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
};

const convertToObjectArray = (obj: Record<string, string>): ColorProps[] => {
    return Object.entries(obj).map(([name, value]) => ({ name, value }));
};

export const Colors: Story = {
    render: () => {
        const colors: ColorProps[] = convertToObjectArray(vars.color.brand.blue);
        console.log('vars.color.brand.blue', colors)
        
        return (
            <div>
                <StoryHeader>Colors</StoryHeader>

                <Typography className={mb10}>
                    The colors are set using a vanilla extract theme. This means when you inspect it in the devtools the names are obfuscated. Internally
                    however, they match the names from Figma.
                </Typography>

                <ColorPalette title="Brand colors" >
                    <ColorItem colorName="Blue" colorClass="brand-blue" colors={colors} />
                </ColorPalette>

                <ColorPaletteContainer title="Brand colors" subtitle="Blue">
                    <ColorCard title="100" valueToCopy="vars.color.brand.blue[100]" color={vars.color.brand.blue[100]} />
                    <ColorCard title="200" valueToCopy="vars.color.brand.blue[200]" color={vars.color.brand.blue[200]} />
                    <ColorCard title="300" valueToCopy="vars.color.brand.blue[300]" color={vars.color.brand.blue[300]} />
                    <ColorCard title="400" valueToCopy="vars.color.brand.blue[400]" color={vars.color.brand.blue[400]} />
                    <ColorCard title="500" valueToCopy="vars.color.brand.blue[500]" color={vars.color.brand.blue[500]} />
                    <ColorCard title="600" valueToCopy="vars.color.brand.blue[600]" color={vars.color.brand.blue[600]} />
                    <ColorCard title="700" valueToCopy="vars.color.brand.blue[700]" color={vars.color.brand.blue[700]} />
                    <ColorCard title="800" valueToCopy="vars.color.brand.blue[800]" color={vars.color.brand.blue[800]} />
                    <ColorCard title="900" valueToCopy="vars.color.brand.blue[900]" color={vars.color.brand.blue[900]} />
                </ColorPaletteContainer>

                <ColorPaletteContainer subtitle="Red">
                    <ColorCard title="100" valueToCopy="vars.color.brand.red[100]" color={vars.color.brand.red[100]} />
                    <ColorCard title="200" valueToCopy="vars.color.brand.red[200]" color={vars.color.brand.red[200]} />
                    <ColorCard title="300" valueToCopy="vars.color.brand.red[300]" color={vars.color.brand.red[300]} />
                    <ColorCard title="400" valueToCopy="vars.color.brand.red[400]" color={vars.color.brand.red[400]} />
                    <ColorCard title="500" valueToCopy="vars.color.brand.red[500]" color={vars.color.brand.red[500]} />
                    <ColorCard title="600" valueToCopy="vars.color.brand.red[600]" color={vars.color.brand.red[600]} />
                    <ColorCard title="700" valueToCopy="vars.color.brand.red[700]" color={vars.color.brand.red[700]} />
                    <ColorCard title="800" valueToCopy="vars.color.brand.red[800]" color={vars.color.brand.red[800]} />
                    <ColorCard title="900" valueToCopy="vars.color.brand.red[900]" color={vars.color.brand.red[900]} />
                </ColorPaletteContainer>

                <ColorPaletteContainer title="Neutral">
                    <ColorCard title="100" valueToCopy="vars.color.neutral.[100]" color={vars.color.neutral[100]} />
                    <ColorCard title="200" valueToCopy="vars.color.neutral.[200]" color={vars.color.neutral[200]} />
                    <ColorCard title="300" valueToCopy="vars.color.neutral.[300]" color={vars.color.neutral[300]} />
                    <ColorCard title="400" valueToCopy="vars.color.neutral.[400]" color={vars.color.neutral[400]} />
                    <ColorCard title="500" valueToCopy="vars.color.neutral.[500]" color={vars.color.neutral[500]} />
                    <ColorCard title="600" valueToCopy="vars.color.neutral.[600]" color={vars.color.neutral[600]} />
                    <ColorCard title="700" valueToCopy="vars.color.neutral.[700]" color={vars.color.neutral[700]} />
                    <ColorCard title="800" valueToCopy="vars.color.neutral.[800]" color={vars.color.neutral[800]} />
                    <ColorCard title="900" valueToCopy="vars.color.neutral.[900]" color={vars.color.neutral[900]} />
                </ColorPaletteContainer>
            </div>
        );
    },
};

const ColorPaletteContainer = (props: ColorPaletteProps) => {
    const { title, subtitle, children } = props;
    return (
        <>
            {props.title && (
                <Typography component="h2" variant="text-4xl" className={mb4}>
                    {title}
                </Typography>
            )}

            {props.subtitle && (
                <Typography component="h3" variant="text-lg" className={mb2}>
                    {subtitle}
                </Typography>
            )}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: vars.spacings["4"],
                    marginBottom: vars.spacings[10],
                }}>
                {children}
            </div>
        </>
    );
};
