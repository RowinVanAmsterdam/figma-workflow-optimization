import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../Typography";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { blockWithDottedBorder, separator } from "@/utils/storybook-utils.css";
import { p2 } from "../../spacing/padding.css";
import { mb10 } from "../../spacing/margin.css";
import { vars } from "@/theme/contract.css";
import { TypographyStoriesComponent } from "./TypographyStoriesComponent";
import * as styles from "./typography.stories.css";
import { StoryHeader } from "@/shared/Stories/StoryHeader";

const meta: Meta<typeof Typography> = {
    title: "foundation/Typography",
    argTypes: {
        fontWeight: {
            options: ["light", "regular", "medium", "bold"],
            control: { type: "select" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Typography>;

const paddedDottedBlocks = mergeClassNames(blockWithDottedBorder, p2);

const sampleHeading = "The quick brown fox jumps over the lazy dog";
const sampleBody =
    "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.";

export const Headers: Story = {
    args: {
        children: sampleHeading,
        fontWeight: "regular",
    },

    render: (args) => {
        const sampleText = args.children?.toString();

        return (
            <>
                <StoryHeader>Headers</StoryHeader>
                <ul className={styles.typographyList}>
                    <TypographyStoriesComponent component="h1" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component="h2" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component="h3" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component="h4" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component="h5" sampleText={sampleText} fontWeight={args.fontWeight} />
                    <TypographyStoriesComponent component="h6" sampleText={sampleText} fontWeight={args.fontWeight} />
                </ul>
            </>
        );
    },
};

export const Paragraphs: Story = {
    args: {
        children: sampleBody,
        fontWeight: "regular",
    },

    render: (args) => {
        return (
            <>
                <StoryHeader>Paragraphs</StoryHeader>

                <ul className={styles.typographyList}>
                    <TypographyStoriesComponent component="p" sampleText={sampleBody} fontWeight={args.fontWeight} />
                </ul>
            </>
        );
    },
};
