import type { Meta, StoryObj } from "@storybook/react";
import { mb10 } from "../margin.css";
import { vars } from "@/theme/contract.css";
import { Typography } from "../../typography/Typography";
import { spacings } from "@/theme/assets/spacings";
import * as styles from "./spacing.stories.css";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { StoryHeader } from "@/shared/Stories/StoryHeader";

type Story = StoryObj<any>;

const meta: Meta = {
    title: "foundation/Spacings",
};

export default meta;

const pxToRem = (pxValue: number, baseFontSize: number = 16): string => {
    const remValue = pxValue / baseFontSize;
    return `${remValue}rem`;
};

const spacingKeys = Object.keys(spacings)
    .map(parseFloat)
    .sort((a, b) => a - b) as Array<keyof typeof spacings>;

const TableHeadCell = (props: { children: React.ReactNode; className?: string }) => {
    return (
        <Typography component="th" fontWeight="medium" className={mergeClassNames(styles.tableHeadCell, props.className)}>
            {props.children}
        </Typography>
    );
};

export const Spacing: Story = {
    render: (args) => {
        return (
            <>
                <StoryHeader>
                    Spacing
                </StoryHeader>

                <Typography className={mb10}>
                    The values are proportional, meaning that, for instance, 16 represents twice the spacing of 8. Each spacing unit is equivalent to 0.25rem,
                    which typically translates to 4px in common browsers by default.
                </Typography>

                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeadRow}>
                            <TableHeadCell className={styles.tableHeadCellName}>Name</TableHeadCell>
                            <TableHeadCell className={styles.tableHeadCellSize}>Size</TableHeadCell>
                            <TableHeadCell className={styles.tableHeadCellPixels}>Pixels</TableHeadCell>
                            <th className={styles.tableHeadCell} />
                        </tr>
                    </thead>

                    <tbody>
                        {spacingKeys.map((key) => (
                            <tr key={key} className={styles.tableRow}>
                                <Typography component="td" className={styles.tableCell}>
                                    {String(key)}
                                </Typography>
                                <Typography component="td" className={styles.tableCell}>
                                    {pxToRem(parseInt(spacings[key]))}
                                </Typography>
                                <Typography component="td" className={styles.tableCell}>
                                    {spacings[key]}
                                </Typography>
                                <td>
                                    <div
                                        style={{
                                            width: spacings[key],
                                            height: vars.spacings[4],
                                            backgroundColor: vars.color.brand.blue[500],
                                            borderRadius: vars.spacings["0.5"],
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    },
};
