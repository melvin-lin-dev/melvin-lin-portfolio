import profile3DLogos from "@/lib/modules/profile/constants/profile-3d-logos";
import Image from "next/image";
import type { ReactElement } from "react";
import styles from "./cube-3d-container.module.scss";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";

export default function Cube3DContainer(): ReactElement {
    return (
        <div className={`${styles.cube3D} ${styles.rotateY}`}>
            <div className={`${styles.cube}`}>
                {profile3DLogos.map((logo) => (
                    <div key={logo.name} className={`${styles[logo.side]}`}>
                        <div>
                            <Image
                                src={`/images/${logo.image}`}
                                alt={`${logo.name} Logo`}
                                className="object-contain"
                                fill
                                sizes={`(max-width: ${BREAKPOINTS.sm - 1}px) 100px, (max-width: ${BREAKPOINTS.md - 1}px) 130px, (max-width: ${BREAKPOINTS.lg - 1}px) 150px, 120px`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
