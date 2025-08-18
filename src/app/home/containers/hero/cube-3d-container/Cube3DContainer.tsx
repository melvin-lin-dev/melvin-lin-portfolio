import profile3DLogos from "@/lib/modules/profile/constants/profile-3d-logos";
import Image from "next/image";
import type { ReactElement } from "react";
import styles from "./cube-3d-container.module.scss";

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
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
