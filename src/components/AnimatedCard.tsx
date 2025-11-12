"use client";

import { motion, type MotionProps } from "framer-motion";
import { type PropsWithChildren } from "react";

type AnimatedCardProps = PropsWithChildren<{
  className?: string;
}> & MotionProps;

export default function AnimatedCard({ children, className, ...rest }: AnimatedCardProps) {
  return (
    <motion.div
      className={`card ${className ?? ""}`}
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}



