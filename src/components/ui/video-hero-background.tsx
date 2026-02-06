import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import heroClip1 from "@/assets/videos/hero-clip-1.mp4";
import heroClip2 from "@/assets/videos/hero-clip-2.mp4";
import heroClip3 from "@/assets/videos/hero-clip-3.mp4";

const videos = [heroClip1, heroClip2, heroClip3];

const CLIP_DURATION = 6000; // ms per clip

export default function VideoHeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, CLIP_DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <video
            src={videos[activeIndex]}
            autoPlay
            muted
            playsInline
            loop={false}
            className="w-full h-full object-cover"
            onEnded={() => {
              setActiveIndex((prev) => (prev + 1) % videos.length);
              startTimer();
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              startTimer();
            }}
            className="group relative h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === activeIndex ? 32 : 12 }}
            aria-label={`Ir para vídeo ${i + 1}`}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full" />
            {i === activeIndex && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: CLIP_DURATION / 1000, ease: "linear" }}
                key={`progress-${activeIndex}`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
