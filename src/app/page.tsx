import { Button } from "@/shared/Button/Button";
import * as styles from "./page.css";

export default function Home() {
    return (
        <>
            <h1 className={styles.container}>Hello world</h1>
            <Button variant="primary">Click me</Button>
        </>
    );
}
