import { Button } from "@/shared/Button/Button";
import * as styles from "./page.css";
import { Typography } from "@/foundation/typography/Typography";

export default function Home() {
    return (
        <>
            <div className={styles.hero}>
                <Typography component='h2' variant="text-2xl" fontWeight="bold">Design Tokens - Workflow optimization</Typography>
            </div>
            <Button variant="primary">Click me</Button>
        </>
    );
}
