"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function PageTransition({ children }: PropsWithChildren) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


