"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block bg-[#0066cc]/10 text-[#0066cc] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6"
            >
              Chief Physiotherapist
            </motion.span>

            <div className="md:hidden mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl mx-auto"
              >
                <img
                  src="/Photo.jpeg"
                  alt="Dr. Ajay Krishna Mantrarajam"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-[#0d3b66] leading-tight mb-6"
            >
              Restoring{" "}
              <span className="bg-gradient-to-r from-[#0066cc] to-[#1e88e5] bg-clip-text text-transparent">
                Motion
              </span>
              ,
              <br />
              Reclaiming Life.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#4a6fa5] leading-relaxed max-w-lg mb-10"
            >
              Dr. Ajay Krishna Mantrarajam leads the next generation of
              transitional care. From stroke recovery to elite athletic rehab,
              we bridge the gap between injury and peak performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="#contact"
                className="bg-[#0066cc] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0052a3] hover:scale-105 transition-all shadow-lg"
              >
                Start Recovery
              </a>
              <a
                href="#expertise"
                className="border border-[#0066cc]/30 text-[#0066cc] px-8 py-4 rounded-xl font-bold hover:bg-[#0066cc]/10 transition-colors"
              >
                View Services
              </a>
            </motion.div>
          </div>

          {/* Doctor Image - desktop-only blob photo */}
          <div className="order-1 lg:order-2 relative hidden md:block">
            {/* Animated background blob shapes */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#0066cc] w-full aspect-square absolute -rotate-6 opacity-15"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            />
            <div
              className="bg-[#0099ff] w-full aspect-square absolute rotate-12 opacity-10"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            />

            {/* Main photo container with blob shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 w-full aspect-square bg-[#d4e4ff] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <img
                src="/Photo.jpeg"
                alt="Dr. Ajay Krishna Mantrarajam"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
