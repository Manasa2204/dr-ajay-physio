"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Briefcase, Award } from "lucide-react";

const certifications = [
  "NDT Bobath",
  "Kinesio Taping",
  "Mulligan",
  "PNF",
  "Fascia Manipulation",
  "Dry Needling",
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" ref={ref} className="py-16 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#d4e4ff]"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#d4e4ff]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066cc] to-[#1e88e5] flex items-center justify-center text-white">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d3b66]">
                  Dr. Ajay Krishna Mantrarajam
                </h3>
                <p className="text-sm text-[#0066cc] font-semibold uppercase tracking-wide">
                  MPT (Neuro), BPT
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-[#4a6fa5]">
                <GraduationCap className="w-5 h-5 text-[#0066cc] mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Masters in Neurological Physiotherapy
                </span>
              </div>
              <div className="flex items-start gap-3 text-[#4a6fa5]">
                <Briefcase className="w-5 h-5 text-[#0066cc] mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Chief Physiotherapist & Head, Reyowel Rehabilitation
                </span>
              </div>
              <div className="flex items-start gap-3 text-[#4a6fa5]">
                <MapPin className="w-5 h-5 text-[#0066cc] mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Visakhapatnam & Srikakulam, Andhra Pradesh
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#d4e4ff]">
              <p className="text-xs text-[#4a6fa5] uppercase tracking-widest font-semibold mb-3">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="bg-[#0066cc]/10 text-[#0066cc] text-xs px-3 py-1.5 rounded-lg font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#0d3b66] mb-4">
              A Decade of Healing Excellence
            </h2>
            <div className="hidden lg:block w-16 h-1 bg-gradient-to-r from-[#0066cc] to-[#0099ff] mb-6" />

            <div className="hidden lg:block space-y-4 text-[#4a6fa5] leading-relaxed">
              <p>
                With over 10 years of experience in physiotherapy, Dr. Ajay
                Krishna Mantrarajam has established himself as a leading expert
                in neurological and orthopedic rehabilitation in Andhra Pradesh.
              </p>
              <p>
                Having worked with premier healthcare institutions including
                Continental Hospitals and Citizens Hospitals in Hyderabad, he
                brings a wealth of experience in managing complex cases ranging
                from stroke rehabilitation to post-cardiac surgery recovery.
              </p>
              <p>
                His patient-centered approach, combined with advanced manual
                therapy techniques, has helped over 5,000 patients regain their
                mobility and return to an active, fulfilling life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
