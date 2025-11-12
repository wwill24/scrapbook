"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import AnniversarySlide from "./AnniversarySlide";
import ReasonsSlide from "./ReasonsSlide";
import SongsSlide from "./SongsSlide";
import MemoriesSlide from "./MemoriesSlide";
import TimelineSlide from "./TimelineSlide";
import CalendarSlide from "./CalendarSlide";
import ScrapbookOpening from "./ScrapbookOpening";
import WeLoveToEatSlide from "./WeLoveToEatSlide";

const slides = [
  { id: "calendar", title: "August 2024", component: CalendarSlide },
  { id: "anniversary", title: "Our Anniversary", component: AnniversarySlide },
  { id: "reasons", title: "Why I Love You", component: ReasonsSlide },
  { id: "songs", title: "Our Songs", component: SongsSlide },
  { id: "memories", title: "Our Memories", component: MemoriesSlide },
  { id: "timeline", title: "Our Timeline", component: TimelineSlide },
  { id: "food", title: "We Love to Eat", component: WeLoveToEatSlide },
];

export default function LoveSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOpening, setShowOpening] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleOpeningComplete = () => {
    setShowOpening(false);
  };

  const CurrentComponent = slides[currentSlide].component;

  // Show opening animation first
  if (showOpening) {
    return <ScrapbookOpening onComplete={handleOpeningComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Navigation Header */}
      <motion.div 
        className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-pink-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            </motion.div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="btn-pink px-3 py-2"
                disabled={currentSlide === 0}
              >
                <FaChevronLeft />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-pink-500 scale-125" 
                        : "bg-pink-300 hover:bg-pink-400"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="btn-pink px-3 py-2"
                disabled={currentSlide === slides.length - 1}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          {/* Slide Title */}
          <motion.div 
            className="text-center mt-2"
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-[color:var(--pink-700)]">
              {slides[currentSlide].title}
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-pink-200">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 to-pink-600"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
