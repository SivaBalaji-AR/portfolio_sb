"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LayoutTextFlip = ({
  words = ["SDE", "Freelancer", "AI Engineer"],
  duration = 3000,
}: {
  words: string[];
  duration?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      duration
    );
    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <span
      className="relative inline-flex items-center justify-center font-bold 
                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none overflow-visible"
      style={{
        minWidth: "280px",
        minHeight: "1.2em",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="flex items-center justify-center whitespace-nowrap 
                     bg-gradient-to-b 
                     from-neutral-900 to-neutral-400 
                     dark:from-neutral-50 dark:to-neutral-500
                     bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};