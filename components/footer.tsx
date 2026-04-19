"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 text-center border-t border-[#d4e4ff] bg-white"
    >
      <p className="text-sm text-[#0d3b66]">
        &copy; {new Date().getFullYear()} Dr. Ajay Krishna Mantrarajam. All
        Rights Reserved.
      </p>
      <p className="text-xs text-[#0066cc] mt-2">
        Reyowel Rehabilitation and Transitional Care
      </p>
    </motion.footer>
  );
}
