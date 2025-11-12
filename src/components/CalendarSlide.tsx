"use client";

import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

export default function CalendarSlide() {
  const monthName = "August";
  const year = "2024";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const calendarDays = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  const isSpecialDay = (day: number | null) => day === 25; 

  return (
    <div className="space-y-6">
      <AnimatedCard className="p-8 text-center">
        <motion.h1 
          className="pink-gradient-text text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {monthName} {year}
        </motion.h1>
        <motion.p 
          className="text-lg text-[color:var(--pink-800)]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A special month in our story
        </motion.p>
        
        <div className="max-w-md mx-auto">
          {/* Calendar Grid */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day, index) => (
                <motion.div
                  key={day}
                  className="text-center text-sm font-semibold text-[color:var(--pink-600)] py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  {day}
                </motion.div>
              ))}
            </div>
            
            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <motion.div
                  key={index}
                  className={`relative aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-300 ${
                    day === null 
                      ? "bg-transparent" 
                      : isSpecialDay(day)
                      ? "bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-lg"
                      : "bg-pink-50 text-[color:var(--pink-700)] hover:bg-pink-100"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.6 + index * 0.02,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={day !== null ? { scale: 1.1 } : {}}
                >
                  {day !== null && (
                    <>
                      <span>{day}</span>
                      {isSpecialDay(day) && (
                        <motion.div
                          className="absolute -top-1 -right-1 text-lg"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1.0 + index * 0.02,
                            type: "spring",
                            stiffness: 300
                          }}
                        >
                          💕
                        </motion.div>
                      )}
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <p className="text-[color:var(--pink-800)] font-medium">
              I asked you out on a painting date! hehe
            </p>
          </motion.div>
        </div>
      </AnimatedCard>
    </div>
  );
}
