import { Typography } from "@/foundation/typography/Typography";
import { StoryHeader } from "@/shared/Stories/StoryHeader";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { Meta, StoryObj } from "@storybook/react";
import * as styles from "./breakpoints.stories.css";

const meta: Meta = {
    title: "Foundation/Breakpoints",
};

export default meta;

type Story = StoryObj<any>;

type TableBreakpointCellProps = {
    breakpoint: string;
    minWidth: string;
    css: string;
};

export const Breakpoints: Story = {
    render: () => {
        return (
            <>
                <StoryHeader>Breakpoints</StoryHeader>

                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeadRow}>
                            <TableHeadCell className={styles.tableHeadCell}>Breakpoint prefix</TableHeadCell>
                            <TableHeadCell className={styles.tableHeadCell}>Minimum width</TableHeadCell>
                            <TableHeadCell className={styles.tableHeadCell}>CSS</TableHeadCell>
                            <th className={styles.tableHeadCell} />
                        </tr>
                    </thead>

                    <tbody>
                        <TableBreakpointCell breakpoint="sm" minWidth="640" css="@media (min-width: 640px) { ... }" />
                        <TableBreakpointCell breakpoint="md" minWidth="768" css="@media (min-width: 768px) { ... }" />
                        <TableBreakpointCell breakpoint="lg" minWidth="1024" css="@media (min-width: 1024px) { ... }" />
                        <TableBreakpointCell breakpoint="xl" minWidth="1280" css="@media (min-width: 1280px) { ... }" />
                        <TableBreakpointCell breakpoint="2xl" minWidth="1536" css="@media (min-width: 1536px) { ... }" />
                    </tbody>
                </table>
            </>
        );
    },
};

const TableHeadCell = (props: { children: React.ReactNode; className?: string }) => {
    return (
        <Typography component="th" fontWeight="medium" className={mergeClassNames(styles.tableHeadCell, props.className)}>
            {props.children}
        </Typography>
    );
};

const TableBreakpointCell = (props: TableBreakpointCellProps) => (
    <tr className={styles.tableRow}>
        <Typography component="td" className={styles.tableCell}>
            {props.breakpoint}
        </Typography>
        <Typography component="td" className={styles.tableCell}>
            {props.minWidth}px
        </Typography>
        <Typography component="td" className={styles.tableCell}>
            {props.css}
        </Typography>
    </tr>
);
