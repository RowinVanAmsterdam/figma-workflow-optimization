import { Typography } from "@/foundation/typography/Typography";
import * as styles from "./colorPalette.css";

type ColorPaletteProps = {
    title: string;
    children: React.ReactNode;
};

export const ColorPalette = ({ title, children }: ColorPaletteProps) => {
    return (
        <section>
            <Typography component="h2" variant="text-3xl">
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
