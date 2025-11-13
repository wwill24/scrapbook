"use client";

import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

const memories = [
  { 
    title: "First Date", 
    description: "I asked you out here :D", 
    image: "memory-photos/first-date.jpg" 
  },
  { 
    title: "First Time at Ikea", 
    description: "Two monkeys in one photo!", 
    image: "memory-photos/ikea.jpg" 
  },
  { 
    title: "First Trip to Downtown Disney", 
    description: "You make me wear the silly Mickey ears", 
    image: "memory-photos/dt-disney.jpg" 
  },
  { 
    title: "First Trip to Aquarium", 
    description: "Monterey Bay Aquarium!!! We love the otters", 
    image: "memory-photos/aquarium.jpg" 
  },
  { 
    title: "First Sports Game", 
    description: "Finally we went to a sports game", 
    image: "memory-photos/giants-game.jpg" 
  },
  { 
    title: "First Time at the Gardens", 
    description: "Descanso Gardens easily one of the best places we've been", 
    image: "memory-photos/descansco-garden.jpg" 
  },
];

export default function MemoriesSlide() {
  return (
    <div className="space-y-6">
      <AnimatedCard className="p-8 text-center">
        <motion.h1 
          className="pink-gradient-text text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Memories
        </motion.h1>

        <motion.p 
          className="text-lg text-[color:var(--pink-800)]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Special moments that made our story beautiful
        </motion.p>

        {/* Memory cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              className="card p-4 text-center group cursor-pointer bg-white/60 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm border border-pink-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative mb-4 h-72 w-full overflow-hidden rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>

              <motion.h3 
                className="text-xl font-bold pink-gradient-text mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                {memory.title}
              </motion.h3>

              <motion.p 
                className="text-sm text-[color:var(--pink-600)] italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                {memory.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 p-4 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <p className="text-[color:var(--pink-800)] font-medium">
            You look like a cutie pie in each photo!
          </p>
        </motion.div>
      </AnimatedCard>
    </div>
  );
}
