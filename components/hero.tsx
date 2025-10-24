"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "bg-white dark:bg-black",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black -z-10"></div>
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-900/10 to-black/80 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500 mb-4"
      >
        Building performant web applications
      </motion.p>

      {/* Name + Flipping Roles */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}a
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center mb-6"
      >
        <h1 className="bg-gradient-to-b from-neutral-900 to-neutral-400 dark:from-neutral-50 dark:to-neutral-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent leading-tight">
          SIVA BALAJI
        </h1>

        <div className="w-full sm:w-auto flex justify-center">
          <LayoutTextFlip
            words={["Software Engineer", "AI Engineer", "Backend Developer"]}
            duration={2500}
          />
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 1 }}
  className="mt-4 max-w-xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg px-4"
>
  Bridging creative vision and technical execution — I build scalable web 
  applications powered by{" "}
  <span className="text-[#61DAFB] font-semibold">React</span>,{" "}
  <span className="text-[#000000] dark:text-[#FFFFFF] font-semibold">Next.js</span>, and{" "}
  <span className="text-[#008080] font-semibold">FastAPI</span>.{" "}
  My goal is simple: craft technology that doesn’t just work — it performs, scales, and provides an intuitive user experience.
</motion.p>


      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
      >
        <Button
          size="lg"
          className="rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition w-full sm:w-auto"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore My Work
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full text-neutral-700 border-neutral-400 hover:bg-neutral-100 dark:text-neutral-300 dark:border-neutral-500 dark:hover:bg-neutral-800 w-full sm:w-auto"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let's Connect
        </Button>
      </motion.div>

    </section>
  );
}