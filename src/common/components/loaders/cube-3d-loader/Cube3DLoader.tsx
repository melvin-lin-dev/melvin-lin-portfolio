import type { ReactElement } from "react";
import styles from "./cube-3d-loader.module.scss";

export default function Cube3DLoader(): ReactElement {
    return (
        <div className={`${styles.loop} ${styles.cubes}`}>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
        </div>
    );
}
