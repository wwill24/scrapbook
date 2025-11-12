"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

interface ScrapbookOpeningProps {
  onComplete: () => void;
}

export default function ScrapbookOpening({ onComplete }: ScrapbookOpeningProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentStep === 1) {
      const timer = setTimeout(() => {
        setCurrentStep(2);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 2) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showContent, onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 to-pink-100 z-50 flex items-center justify-center">
      <div className="relative w-full h-full max-w-4xl max-h-3xl">
        {/* Scrapbook Pages */}
        <div className="relative w-full h-full">
          {/* Left Page */}
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-amber-600 to-amber-800 shadow-2xl origin-right"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: currentStep >= 1 ? -180 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Page Content */}
            <div className="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: currentStep >= 1 ? 1 : 0, scale: currentStep >= 1 ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  💕
                </motion.div>
                <h2 className="text-2xl font-bold pink-gradient-text mb-2">Our Love Story</h2>
                <p className="text-pink-600">A digital scrapbook of memories</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Page */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-amber-600 to-amber-800 shadow-2xl origin-left"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: currentStep >= 2 ? 180 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Page Content */}
            <div className="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: currentStep >= 2 ? 1 : 0, scale: currentStep >= 2 ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  📖
                </motion.div>
                <h2 className="text-2xl font-bold pink-gradient-text mb-2">Welcome</h2>
                <p className="text-pink-600">Turn the pages of our journey</p>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Opening Animation Overlay */}
        <AnimatePresence>
          {currentStep === 0 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              >
                <motion.h1
                  className="text-4xl font-bold pink-gradient-text mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Opening Our Scrapbook
                </motion.h1>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final Welcome Message */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaHeart className="text-pink-500 mx-auto" />
                </motion.div>
                <motion.h1
                  className="text-3xl font-bold pink-gradient-text mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Welcome to Our Love Story
                </motion.h1>
                <motion.p
                  className="text-lg text-pink-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Click to begin your journey through our memories...
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
