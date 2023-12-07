import { Meta, StoryObj } from "@storybook/react";
import { ColorCard } from "../ColorCard";
import { vars } from "@/theme/contract.css";
import { Typography } from "../../typography/Typography";
import { mb10, mb2, mb4, mt10 } from "../../spacing/margin.css";
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
        
        return (
            <div>
                <StoryHeader>Colors</StoryHeader>

                <Typography className={mb10}>
                    The colors are set using a vanilla extract theme. This means when you inspect it in the devtools the names are obfuscated. Internally
                    however, they match the names from Figma.
                </Typography>

                <ColorPalette title="Brand colors" >
                    <ColorItem colorName="Blue" colorClass="brand-blue" colors={convertToObjectArray(vars.color.brand.blue)} />
                    <ColorItem colorName="Red" colorClass="brand-red" colors={convertToObjectArray(vars.color.brand.red)} />
                </ColorPalette>

                <ColorPalette title="Neutral colors">
                    <ColorItem colorName="Neutral" colorClass="neutral" colors={convertToObjectArray(vars.color.neutral)} />
                </ColorPalette>
            </div>
        );
    },
};
