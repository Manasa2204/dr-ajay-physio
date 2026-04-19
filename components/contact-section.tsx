"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 bg-[#0d3b66] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,102,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,204,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Your Recovery Today
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">
            Available for consultations at Reyowel Rehabilitation in
            Visakhapatnam and Srikakulam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="tel:+919133560111"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 px-6 py-4 rounded-xl transition-colors group"
          >
            <Phone className="w-5 h-5 text-[#1e88e5]" />
            <span className="text-white font-semibold">+91 91335 60111</span>
          </a>

          <a
            href="mailto:contact@reyowel.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 px-6 py-4 rounded-xl transition-colors group"
          >
            <Mail className="w-5 h-5 text-[#1e88e5]" />
            <span className="text-white font-semibold">
              contact@reyowel.com
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm mb-10"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Visakhapatnam & Srikakulam</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Sat: 9AM - 7PM</span>
          </div>
        </motion.div>

        <motion.a
          href="tel:+919133560111"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all"
        >
          <Phone className="w-5 h-5" />
          Book Appointment
        </motion.a>
      </div>
    </section>
  );
}
