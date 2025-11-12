"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPause, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type SlideshowProps = {
  images: string[];
  title?: string;
  autoPlayMs?: number;
};

export default function Slideshow({ images, title, autoPlayMs = 3500 }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const hasImages = safeImages.length > 0;

  useEffect(() => {
    if (!playing || !hasImages) return;
    timerRef.current = window.setTimeout(() => setIndex((i) => (i + 1) % safeImages.length), autoPlayMs);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, playing, autoPlayMs, hasImages, safeImages.length]);

  const prev = () => setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  const next = () => setIndex((i) => (i + 1) % safeImages.length);

  if (!hasImages) {
    return <div className="card p-6 text-center">No photos found for this year. Add some to public/photos.</div>;
  }

  return (
    <div className="card p-4">
      {title && <h3 className="pink-gradient-text text-[18px] font-bold mb-3">{title}</h3>}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
        <AnimatePresence mode="wait">
          <motion.div key={safeImages[index]} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <Image src={safeImages[index]} alt={title ?? "Slideshow photo"} fill className="object-cover" sizes="(min-width: 768px) 800px, 100vw" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1">
          {safeImages.map((_, i) => (
            <span key={i} className={`h-1.5 w-4 rounded-full ${i === index ? "bg-[color:var(--pink-600)]" : "bg-[color:var(--pink-300)]"}`} />
          ))}
        </div>
        <button className="btn-pink absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2" onClick={prev} aria-label="Previous photo">
          <FaChevronLeft />
        </button>
        <button className="btn-pink absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2" onClick={next} aria-label="Next photo">
          <FaChevronRight />
        </button>
        <button className="btn-pink absolute right-2 top-2 px-3 py-2" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
          {playing ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
}


