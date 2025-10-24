"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center mb-6"
      >
        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent leading-tight">
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
  Bridging human intuition and machine reasoning — I develop intelligent platforms powered by{" "}
  <span className="text-[#00E5A0] font-semibold">AI</span>,{" "}
  <span className="text-[#4A90E2] font-semibold">ML</span>, and{" "}
  <span className="text-[#00E5A0] font-semibold">LLMs</span>.{" "}
  My goal is simple: craft technology that doesn’t just respond — it thinks, evolves, and amplifies human capability.
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
          className="rounded-full bg-white text-black hover:scale-105 transition w-full sm:w-auto"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore My Work
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full border border-neutral-500 text-neutral-300 hover:bg-neutral-800 w-full sm:w-auto"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let's Connect
        </Button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 sm:mt-12 flex gap-6 text-neutral-400"
      >
        <a
          href="https://github.com/Yogeshwaran-Projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-transform hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/yogeshwaran07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-transform hover:scale-110" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Yogeshwaran.arc@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-transform hover:scale-110" />
        </a>
      </motion.div>
    </section>
  );
}