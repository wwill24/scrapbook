"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "./AnimatedCard";

const restaurants = [
  { 
    name: "Malatang", 
    location: "San Mateo",
    description: "We kinda spammed this spot a little too much...",
    photo: "/restaurant-photos/malatang.jpg",
    date: "August 2024"
  },
  { 
    name: "Texas De Brazil", 
    location: "Irvine",
    description: "Wanted to come here for a date but turned out to be a bad experience...",
    photo: "/restaurant-photos/fogo-de-chao.jpg",
    date: "February 2025"
  },
  { 
    name: "Ghiradelli", 
    location: "San Francisco",
    description: "A crazy yummy sundae (my first one ever lol) and I took too much when I said I didn't really want any",
    photo: "/restaurant-photos/ghiradelli.jpg",
    date: "June 2025"
  },
  { 
    name: "Dim Sum", 
    location: "San Francisco",
    description: "First time getting dim sum in the bay!!!",
    photo: "/restaurant-photos/dimsum.jpg",
    date: "June 2025"
  },
  { 
    name: "Bocconcino", 
    location: "San Francisco",
    description: "The best pasta ever!!! Fun food crawl that we had hehe",
    photo: "/restaurant-photos/boccocino.jpg",
    date: "June 2024"
  },
  { 
    name: "Ox 9 Noodle", 
    location: "San Mateo",
    description: "I really liked this place! :D ",
    photo: "/restaurant-photos/ox9.jpg",
    date: "August 2024"
  },
];

export default function WeLoveToEatSlide() {
  return (
    <div className="space-y-6">
      <AnimatedCard className="p-8 text-center">
        <motion.h1 
          className="pink-gradient-text text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We Love to Eat
        </motion.h1>
        <motion.p 
          className="text-lg text-[color:var(--pink-800)]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our favorite restaurants and memorable meals together
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              className="card p-0 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Restaurant Photo */}
              <motion.div
                className="relative h-48 w-full overflow-hidden"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={restaurant.photo}
                  alt={`${restaurant.name} restaurant`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(min-width: 768px) 400px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Date Badge */}
                <motion.div
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <span className="text-xs font-medium text-pink-600">{restaurant.date}</span>
                </motion.div>
              </motion.div>
              
              {/* Restaurant Info */}
              <div className="p-4">
                <motion.h3 
                  className="text-lg font-bold pink-gradient-text mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                >
                  {restaurant.name}
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-[color:var(--pink-600)] font-medium mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                >
                  📍 {restaurant.location}
                </motion.p>
                
                <motion.p 
                  className="text-sm text-[color:var(--pink-700)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                >
                  {restaurant.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <motion.div
            className="text-4xl mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 2.2, type: "spring", stiffness: 200 }}
          >
            🍽️
          </motion.div>
          <p className="text-[color:var(--pink-800)] font-medium text-lg">
            This is how we get fat together!
          </p>
        </motion.div>
      </AnimatedCard>
    </div>
  );
}
