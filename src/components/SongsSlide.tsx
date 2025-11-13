"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "./AnimatedCard";

const songs = [
  { title: "Saturn", artist: "SZA", reason: "Our first song together", coverImage: "/scrapbook/song-covers/saturn.png" },
  { title: "Superposition", artist: "Daniel Caesar", reason: "The first song you played in my car", coverImage: "/scrapbook/song-covers/superposition.jpeg" },
  { title: "Latch", artist: "Sam Smith", reason: "You never stopped playing this song...", coverImage: "/scrapbook/song-covers/latch.png" },
  { title: "Somewhere In Brooklyn", artist: "Bruno Mars", reason: "First Bruno Mars song that I didn't hear before", coverImage: "/scrapbook/song-covers/somewhere-in-brooklyn.jpeg" },
  { title: "Lavender Buds", artist: "MF DOOM", reason: "You also showed me this song!", coverImage: "/scrapbook/song-covers/lavender-buds.jpg" },
  { title: "Love Me Not", artist: "Ravyn Lenae", reason: "We listened to this song together on the way to the bay", coverImage: "/scrapbook/song-covers/love-me-not.jpg" }
];

export default function SongsSlide() {
  return (
    <div className="space-y-6">
      <AnimatedCard className="p-8 text-center">
        <motion.h1 
          className="pink-gradient-text text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Songs That Remind Me of You
        </motion.h1>
        <motion.p 
          className="text-lg text-[color:var(--pink-800)]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every time I hear these songs, I think of you!!!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Image
                  src={song.coverImage}
                  alt={`${song.title} by ${song.artist} album cover`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold pink-gradient-text mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                {song.title}
              </motion.h3>
              
              <motion.p 
                className="text-[color:var(--pink-600)] font-medium mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
              >
                by {song.artist}
              </motion.p>
              
              <motion.div 
                className="text-sm text-[color:var(--pink-700)] border-t border-pink-200 pt-3 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              >
                {song.reason}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
}
