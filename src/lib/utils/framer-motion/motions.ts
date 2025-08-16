export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hiddenReversed: { opacity: 0, y: -40 },
};

export const fadeUpScale = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hiddenReversed: { opacity: 0, y: -40, scale: 0.9 },
};

export const fadeCenter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hiddenReversed: { opacity: 0 },
};

export const fadeUpRotate = {
    hidden: { opacity: 0, y: 40, rotate: 5 },
    visible: { opacity: 1, y: 0, rotate: 0 },
    hiddenReversed: { opacity: 0, y: -40, rotate: -5 },
};

export const shrinkFadeIn = {
    hidden: { opacity: 0, scale: 1.1, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    hiddenReversed: { opacity: 0, scale: 1.1, y: -10 },
};

export const popIn = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    hiddenReversed: { scale: 0 },
};

export const horizontalGrow = (transformOrigin = "left") => ({
    hidden: { scaleX: 0, transformOrigin },
    visible: { scaleX: 1, transformOrigin },
    hiddenReversed: { scaleX: 0, transformOrigin },
});

export const fadeIn = (index: number) => {
    const distance = 40;
    const defaultVariants = (dirX: number, dirY: number) => ({
        hidden: { opacity: 0, x: distance * dirX, y: distance * dirY },
        visible: { opacity: 1, x: 0, y: 0 },
        hiddenReversed: { opacity: 0, x: distance * -dirX, y: distance * -dirY },
    });

    switch (index) {
        case 0:
            return defaultVariants(-1, -1);
        case 1:
            return defaultVariants(1, -1);
        case 2:
            return defaultVariants(1, 1);
        case 3:
            return defaultVariants(-1, 1);
    }
};

export const fadeUp3D = {
    hidden: { opacity: 0, z: 50 },
    visible: { opacity: 1, z: 0 },
    hiddenReversed: { opacity: 0, z: -50 },
};
