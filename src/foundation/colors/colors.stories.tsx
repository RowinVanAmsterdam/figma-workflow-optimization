import { Typography } from "@/shared/Typography/Typography";
import { Meta, StoryObj } from "@storybook/react";
import { ColorCardHeader } from "./ColorCards";
import { vars } from "@/theme/contract.css";

const meta: Meta = {
    title: "Foundation/Colors",
};

export default meta;

type Story = StoryObj<any>;

export const Colors: Story = {
    render: () => {
        return (
            <div>
                <Typography>Colors</Typography>

                <Typography>
                    The colors are set using a vanilla extract theme. This means when you inspect it in the devtools the names are obfuscated. Internally
                    however, they match the names from Figma.
                </Typography>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: vars.spacings["0.5"],
                        // marginBottom: vars.spacings["10s"],
                    }}>
                    <ColorCardHeader title="O500" subtitle="Brand orange" color={vars.color.red[100]} />
                    <ColorCardHeader title="O500" subtitle="Brand orange" color={vars.color.red[200]} />
                    <ColorCardHeader title="O500" subtitle="Brand orange" color={vars.color.red[300]} />
                    <ColorCardHeader title="O500" subtitle="Brand orange" color={vars.color.red[400]} />
                    <ColorCardHeader title="O500" subtitle="Brand orange" color={vars.color.red[500]} />

                </div>
            </div>
        );
    },
};
