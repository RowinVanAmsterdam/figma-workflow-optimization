import { Meta, StoryObj } from "@storybook/react";
import { ColorCard } from "./ColorCard";
import { vars } from "@/theme/contract.css";
import { Typography } from "../typography/Typography";
import { mb10, mb4 } from "../spacing/margin.css";
import { StoryHeader } from "@/shared/Stories/StoryHeader";

const meta: Meta = {
    title: "Foundation/Colors",
};

export default meta;

type Story = StoryObj<any>;

export const Colors: Story = {
    render: () => {
        return (
            <div>
                <StoryHeader>Colors</StoryHeader>

                <Typography className={mb10}>
                    The colors are set using a vanilla extract theme. This means when you inspect it in the devtools the names are obfuscated. Internally
                    however, they match the names from Figma.
                </Typography>

                <Typography component="h2" className={mb4}>Brand colors</Typography>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: vars.spacings["4"],
                        marginBottom: vars.spacings[10],
                    }}>
                    <ColorCard title="B100" subtitle="Brand blue" color={vars.color.blue[100]} />
                    <ColorCard title="B200" subtitle="Brand blue" color={vars.color.blue[200]} />
                    <ColorCard title="B300" subtitle="Brand blue" color={vars.color.blue[300]} />
                    <ColorCard title="B400" subtitle="Brand blue" color={vars.color.blue[400]} />
                    <ColorCard title="B500" subtitle="Brand blue" color={vars.color.blue[500]} />
                    <ColorCard title="B600" subtitle="Brand blue" color={vars.color.blue[600]} />
                    <ColorCard title="B700" subtitle="Brand blue" color={vars.color.blue[700]} />
                    <ColorCard title="B800" subtitle="Brand blue" color={vars.color.blue[800]} />
                    <ColorCard title="B900" subtitle="Brand blue" color={vars.color.blue[900]} />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: vars.spacings["4"],
                        marginBottom: vars.spacings[10],
                    }}>

                    <ColorCard title="R100" subtitle="Brand red" color={vars.color.red[100]} />
                    <ColorCard title="R200" subtitle="Brand red" color={vars.color.red[200]} />
                    <ColorCard title="R300" subtitle="Brand red" color={vars.color.red[300]} />
                    <ColorCard title="R400" subtitle="Brand red" color={vars.color.red[400]} />
                    <ColorCard title="R500" subtitle="Brand red" color={vars.color.red[500]} />
                    <ColorCard title="R600" subtitle="Brand red" color={vars.color.red[600]} />
                    <ColorCard title="R700" subtitle="Brand red" color={vars.color.red[700]} />
                    <ColorCard title="R800" subtitle="Brand red" color={vars.color.red[800]} />
                    <ColorCard title="R900" subtitle="Brand red" color={vars.color.red[900]} />
                </div>

                <Typography component="h2" className={mb4}>Gray</Typography>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: vars.spacings["4"],
                        marginBottom: vars.spacings[10],
                    }}>
                    <ColorCard title="G100" color={vars.color.gray[100]} />
                    <ColorCard title="G200" color={vars.color.gray[200]} />
                    <ColorCard title="G300" color={vars.color.gray[300]} />
                    <ColorCard title="G400" color={vars.color.gray[400]} />
                    <ColorCard title="G500" color={vars.color.gray[500]} />
                    <ColorCard title="G600" color={vars.color.gray[600]} />
                    <ColorCard title="G700" color={vars.color.gray[700]} />
                    <ColorCard title="G800" color={vars.color.gray[800]} />
                    <ColorCard title="G900" color={vars.color.gray[900]} />
                </div>
            </div>
        );
    },
};
