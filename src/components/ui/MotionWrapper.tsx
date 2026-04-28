"use client"

import dynamic from "next/dynamic"

// Simple wrapper for dynamic motion imports
export const MotionDiv = dynamic(() => import("motion/react").then(mod => ({ default: mod.motion.div })), {
  ssr: false,
  loading: () => <div />
})
