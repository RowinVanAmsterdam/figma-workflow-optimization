import { Meta, StoryObj } from "@storybook/react";
import { vars } from "@/theme/contract.css";
import { Typography } from "../../typography/Typography";
import { mb10 } from "../../spacing/margin.css";
import { StoryHeader } from "@/shared/Stories/StoryHeader";
import { ColorPalette } from "./components/ColorPalette";
import { ColorItem, ColorProps } from "./components/ColorItem";

const meta: Meta = {
    title: "Foundation/Colors",
};

export default meta;

type Story = StoryObj<any>;
const convertToObjectArray = (obj: Record<string, string>): ColorProps[] => {
    return Object.entries(obj).map(([name, value]) => ({ name, value }));
};

export const Colors: Story = {
    render: () => {
        console.log('black', vars.color)
        return (
            <div>
                <StoryHeader>Colors</StoryHeader>

                <Typography className={mb10}>
                    The colors are set using a vanilla extract theme. This means when you inspect it in the devtools the names are obfuscated. Internally
                    however, they match the names from Figma.
                </Typography>

                <ColorPalette title="Brand colors" >
                    <ColorItem colorName="Yellow" colorClass="brand-yellow" colors={convertToObjectArray(vars.color.brand.yellow)} />
                </ColorPalette>

                <ColorPalette title="Neutral colors">
                    <ColorItem colorName="Neutral" colorClass="neutral" colors={convertToObjectArray(vars.color.neutral)} />
                </ColorPalette>

                <ColorPalette title="Default color palette" >
                    <ColorItem colorName="Red" colorClass="red" colors={convertToObjectArray(vars.color.red)} />
                    <ColorItem colorName="Orange" colorClass="orange" colors={convertToObjectArray(vars.color.orange)} />
                    <ColorItem colorName="Yellow" colorClass="yellow" colors={convertToObjectArray(vars.color.yellow)} />
                    <ColorItem colorName="Green" colorClass="green" colors={convertToObjectArray(vars.color.green)} />
                    <ColorItem colorName="Teal" colorClass="teal" colors={convertToObjectArray(vars.color.teal)} />
                    <ColorItem colorName="Blue" colorClass="blue" colors={convertToObjectArray(vars.color.blue)} />
                    <ColorItem colorName="Indigo" colorClass="indigo" colors={convertToObjectArray(vars.color.indigo)} />
                    <ColorItem colorName="Purple" colorClass="purple" colors={convertToObjectArray(vars.color.purple)} />
                    <ColorItem colorName="Pink" colorClass="pink" colors={convertToObjectArray(vars.color.pink)} />
                </ColorPalette>
            </div>
        );
    },
};
