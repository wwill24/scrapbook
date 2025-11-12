"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedCard from "./AnimatedCard";

const reasons = [
  "Your goofy laugh that makes me feel good about myself!",
  "You make doing nothing so much fun and enjoyable",
  "You help me pay for a lot of things! <3",
  "You are a very hard worker and you never give up",
  "You try gaming with me and make it very fun",
  "You are very supportive when I have big things ahead",
  "Your sense of humor and how you can take jokes!",
  "You always think of me and what I want"
];

// Adjusted positions for a wider heart layout
const positions = [
  { top: "0%", left: "25%" },
  { top: "0%", left: "65%" },
  { top: "25%", left: "10%" },
  { top: "25%", left: "42%" },
  { top: "25%", left: "78%" },
  { top: "55%", left: "25%" },
  { top: "55%", left: "65%" },
  { top: "82%", left: "45%" },
];

export default function ReasonsSlide() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      <AnimatedCard className="p-8 text-center">
        <motion.h1
          className="pink-gradient-text text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reasons Why I Love You
        </motion.h1>

        <motion.p
          className="text-lg text-[color:var(--pink-800)]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Click on the hearts!
        </motion.p>

        {/* Heart-shaped layout */}
        <div className="relative w-[28rem] h-[34rem] mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="absolute h-28 w-28 cursor-pointer"
              style={{ ...positions[i] }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onClick={() => toggleCard(i)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flippedCards.has(i) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Front (heart) */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <motion.div
                    className="text-white text-4xl"
                    animate={{ scale: flippedCards.has(i) ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    💕
                  </motion.div>
                </div>

                {/* Back (reason text) */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center shadow-xl p-2"
                  style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                >
                  <motion.div
                    className="text-white text-sm font-medium text-center px-2 leading-tight"
                    animate={{ scale: flippedCards.has(i) ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {reason}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-sm text-[color:var(--pink-600)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {flippedCards.size > 0 && (
            <p>
              You have discovered {flippedCards.size} of {reasons.length} reasons! 💕
            </p>
          )}
        </motion.div>
      </AnimatedCard>
    </div>
  );
}
