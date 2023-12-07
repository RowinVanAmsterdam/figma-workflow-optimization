import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../Typography";
import * as styles from "../../typography-og/stories/typography.stories.css";
import { TypographyStoriesComponent } from "./TypographyStoriesComponent";
import { StoryHeader } from "@/shared/Stories/StoryHeader";

const meta: Meta<typeof Typography> = {
    title: "foundation/Typography - size based",
    argTypes: {
        fontWeight: {
            options: ["light", "regular", "medium", "bold"],
            control: { type: "select" },
        },
        component: {
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
            control: { type: "select" },
            name: "Component",
            defaultValue: "p",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Typography>;

const sampleHeading = "The quick brown fox jumps over the lazy dog";

export const Variants: Story = {
    args: {
        children: sampleHeading,
        fontWeight: "regular",
        component: "p",
    },

    render: (args) => {
        const sampleText = args.children?.toString();

        return (
            <>
                <StoryHeader>Typography - size based</StoryHeader>
                <ul className={styles.typographyList}>
                    <TypographyStoriesComponent component={args.component} variant="text-9xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-8xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-7xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-6xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-5xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-4xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-3xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-2xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-xl" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-lg" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-base" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-sm" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component={args.component} variant="text-xs" sampleText={sampleText} fontWeight={args.fontWeight} />
                </ul>
            </>
        );
    },
};
