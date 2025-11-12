"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      className="h-[240px] md:h-[300px]"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, var(--pink-200), transparent 40%), radial-gradient(circle at 80% 50%, var(--pink-300), transparent 45%), linear-gradient(90deg, var(--pink-100), var(--pink-200), var(--pink-100))",
        backgroundSize: "200% 100%",
      }}
    />
  );
}


