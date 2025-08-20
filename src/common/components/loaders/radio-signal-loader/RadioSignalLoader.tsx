import type { ReactElement } from "react";
import styles from "./radio-signal-loader.module.scss";

export default function RadioSignalLoader(): ReactElement {
    return (
        <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
