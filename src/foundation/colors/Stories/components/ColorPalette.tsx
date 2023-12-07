import { Typography } from "@/foundation/typography/Typography";
import * as styles from "./colorPalette.css";
import { mb10, mb4, mb6, mt14 } from "@/foundation/spacing/margin.css";
import { vars } from "@/theme/contract.css";

type ColorPaletteProps = {
    title: string;
    children: React.ReactNode;
};

export const ColorPalette = (props: ColorPaletteProps) => {
    const { title, children } = props;

    return (
        <section style={{ marginTop: vars.spacings[16]}}>
            <Typography component="h2" variant="text-3xl" className={mb6}>
                {title}
            </Typography>

            <div className={styles.colorPaletteGrid}>
                <Typography className={styles.colorPaletteGridNameColumn}>Name</Typography>
                <Typography className={styles.colorPaletteGridSwatchColumn}>Swatches</Typography>
            </div>

            {children}
        </section>
    );
};
