import { Button } from "@/shared/Button/Button";
import * as styles from "./page.css";

export default function Home() {
    return (
        <>
            <div className={styles.hero}>
                <h1>Hello world</h1>
            </div>
            <Button variant="primary">Click me</Button>
        </>
    );
}
