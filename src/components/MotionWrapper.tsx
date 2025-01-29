"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

type Props = { children: ReactNode };

export function MotionWrapper({ children }: Props) {
    return (
        <LazyMotion
            strict
            features={() => import("@/utils/motionFeatures").then((res) => res.default)}
        >
            <MotionConfig
                transition={{
                    duration: 0.35,
                    type: "keyframes",
                    ease: [0.05, 0.7, 0.1, 1.0],
                }}
            >
                {children}
            </MotionConfig>
        </LazyMotion>
    );
}
