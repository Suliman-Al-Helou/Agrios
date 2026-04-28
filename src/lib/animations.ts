import type { Variants } from "motion/react";

// ─── Easings ──────────────────────────────────────────────
// استخدم هاي الـ easings بدل ما تكتب cubic-bezier كل مرة
export const easings = {
  smooth:   [0.25, 1, 0.5, 1],       // ناعم وسريع — للـ general use
  spring:   [0.34, 1.56, 0.64, 1],   // فيه bounce خفيف — للـ buttons & cards
  inOut:    [0.76, 0, 0.24, 1],      // دخول وخروج متوازن — للـ modals & drawers
  out:      [0.16, 1, 0.3, 1],       // خروج سريع — للـ hero & headlines
} as const;

// ─── Fade ─────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easings.out },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easings.out },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Slide ────────────────────────────────────────────────
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

// ─── Scale ────────────────────────────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easings.spring },
  },
};

// ─── Card ─────────────────────────────────────────────────
// للكروت والعناصر اللي بتظهر بـ grid
export const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easings.out },
  },
};

// ─── Stagger Containers ───────────────────────────────────
// للـ sections العادية
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

// للكروت اللي بتحتاج delay أطول بينهم
export const staggerCards: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ─── Drawer / Modal ───────────────────────────────────────
export const drawerRight: Variants = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: { duration: 0.4, ease: easings.inOut },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.35, ease: easings.inOut },
  },
};

export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

// ─── Hero Slide (للـ slider) ──────────────────────────────
export const heroSlide: Variants = {
  enter:  { opacity: 0, scale: 1.04 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: easings.out },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.7, ease: easings.inOut },
  },
};