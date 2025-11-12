"use client";

import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

export default function AnniversarySlide() {
  const anniversaryData = [
    { label: "Year", value: "1", description: "" },
    { label: "Months", value: "12", description: "" },
    { label: "Days", value: "365", description: "" },
    { label: "Hours", value: "8,760", description:"" },
    { label: "Minutes", value: "525,600", description:"" },
    { label: "Seconds", value: "31,536,000", description:"" },
  ];

  return (
    <div className="space-y-6">
      <AnimatedCard className="p-8 text-center">
        <motion.h1 
          className="pink-gradient-text text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Anniversary!!!
        </motion.h1>
        <motion.p 
          className="text-lg text-[color:var(--pink-800)]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Celebrating our wonderful time together!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {anniversaryData.map((item, index) => (
            <motion.div
              key={item.label}
              className="card p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold pink-gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2, type: "spring", stiffness: 200 }}
              >
                {item.value}
              </motion.div>
              <div className="text-xl font-semibold text-[color:var(--pink-700)] mb-1">
                {item.label}
              </div>
              <div className="text-sm text-[color:var(--pink-600)]">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
}
