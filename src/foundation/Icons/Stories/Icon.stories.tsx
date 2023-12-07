import { StoryHeader } from "@/shared/Stories/StoryHeader";
import type { Meta, StoryObj } from "@storybook/react";
import { IconStoriesComponent } from "./IconStoriesComponent";
import * as styles from "./iconStories.css";

type Story = StoryObj<any>;

const meta: Meta = {
    title: "foundation/Icons",
    tags: ["autodocs"],
};
export default meta;

const iconContext = require.context("../tsx", true, /\.tsx$/);
const iconList = iconContext.keys().map((iconPath: string) => iconPath.match(/([^/]+)\.tsx$/)![1]);

export const Icons: Story = {
    render: () => (
        <>
            <StoryHeader>Icons</StoryHeader>

            <ul className={styles.iconList}>{iconList.map((icon: string) => IconStoriesComponent(icon))}</ul>
        </>
    ),
};
