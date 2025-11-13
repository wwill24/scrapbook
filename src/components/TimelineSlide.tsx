"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "./AnimatedCard";

const milestones = [
  { 
    date: "July 2024", 
    title: "First Hangout", 
    description: "Goofy pre-club time! LOL",
    photo: "/scrapbook/timeline-photos/first-hangout.jpg",
    side: "left"
  },
  { 
    date: "August 2024", 
    title: "First Date", 
    description: "Painting!!!! Miffy with no leg and Charmander that looks dumb",
    photo: "/scrapbook/timeline-photos/paintings.jpg",
    side: "right"
  },
  { 
    date: "September 2024", 
    title: "Paramount", 
    description: "We watched Minions!",
    photo: "/scrapbook/timeline-photos/paramount.jpg",
    side: "left"
  },
  { 
    date: "October 2024", 
    title: "Halloween Party", 
    description: "Funny looking slinky dog costume LOL",
    photo: "/scrapbook/timeline-photos/october1.jpg",
    side: "right"
  },
  { 
    date: "November 2024", 
    title: "AKPSI event", 
    description: "First time dressing nicely together LOL",
    photo: "/scrapbook/timeline-photos/november.jpg",
    side: "left"
  },
  { 
    date: "December 2024", 
    title: "Chocolate Bananas", 
    description: "Getting chocolate bananas at Newport!",
    photo: "/scrapbook/timeline-photos/december.jpg",
    side: "right"
  },
  { 
    date: "January 2025", 
    title: "Birthday", 
    description: "Pookie birthday with friends surprising",
    photo: "/scrapbook/timeline-photos/january.jpg",
    side: "left"
  },
  { 
    date: "February 2025", 
    title: "Chocolate Bananas", 
    description: "Getting chocolate bananas at Newport!",
    photo: "/scrapbook/timeline-photos/december.jpg",
    side: "right"
  },
  { 
    date: "March 2025", 
    title: "Crime Junkie", 
    description: "Going to a crime junkie event after listening to it in the car a million times",
    photo: "/scrapbook/timeline-photos/march.jpg",
    side: "left"
  },
  { 
    date: "April 2025", 
    title: "Descanso Gardens", 
    description: "What a pretty place for us to go",
    photo: "/scrapbook/timeline-photos/april.jpg",
    side: "right"
  },
  { 
    date: "May 2025", 
    title: "Graduation", 
    description: "Finally graduated!!!",
    photo: "/scrapbook/timeline-photos/may.jpg",
    side: "left"
  },
  { 
    date: "June 2025", 
    title: "Alcatraz", 
    description: "Pookie locked up for being mean to me...",
    photo: "/scrapbook/timeline-photos/june.jpg",
    side: "right"
  },
  { 
    date: "July 2025", 
    title: "Revival Ice Cream", 
    description: "Revival Ice Cream after the aquarium!!",
    photo: "/scrapbook/timeline-photos/july.jpg",
    side: "left"
  },
  { 
    date: "August 2025", 
    title: "1 year!!!", 
    description: "Fun times boating and getting stuck!!!",
    photo: "/scrapbook/timeline-photos/sf-boat.jpg",
    side: "right"
  },
  { 
    date: "August 2025", 
    title: "1 year (second photo)", 
    description: "Anniversary dinner!",
    photo: "/scrapbook/timeline-photos/1year.jpg",
    side: "right"
  },
];

export default function TimelineSlide() {
  return (
    <div className="space-y-6">
      <AnimatedCard className="p-8 text-center">
        <motion.h1 
          className="pink-gradient-text text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Timeline
        </motion.h1>
        <motion.p 
          className="text-lg text-[color:var(--pink-800)]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The beautiful journey of our love story
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-pink-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-10 ${
                  milestone.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: milestone.side === 'left' ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Content */}
                <div className={`w-5/12 ${milestone.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="card p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="relative w-32 h-32 mx-auto mb-3 rounded-lg overflow-hidden shadow-lg"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-20% 0px" }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 220 }}
                    >
                      <Image
                        src={milestone.photo}
                        alt={`${milestone.title} photo`}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold pink-gradient-text mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                    >
                      {milestone.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm text-[color:var(--pink-600)] mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.2 }}
                    >
                      {milestone.date}
                    </motion.p>
                    
                    <motion.p 
                      className="text-sm text-[color:var(--pink-700)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                    >
                      {milestone.description}
                    </motion.p>
                  </motion.div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Spacer */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
