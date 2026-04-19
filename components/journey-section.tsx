"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "Present",
    role: "Chief Physiotherapist & Head",
    org: "Reyowel Rehabilitation and Transitional Care, Visakhapatnam & Srikakulam",
    description:
      "Leading comprehensive rehabilitation services across multiple locations, specializing in transitional care and patient-centered recovery.",
    current: true,
    tag: "Current",
  },
  {
    year: "2018 - 2019",
    role: "Senior Physiotherapist",
    org: "Citizens Hospitals, Nalagandla, Hyderabad",
    description:
      "Managed complex rehabilitation cases with focus on advanced physiotherapy techniques and patient outcomes.",
    current: false,
  },
  {
    year: "2016 - 2018",
    role: "Clinical Physiotherapist",
    org: "Continental Hospitals, Nanakramguda, Hyderabad",
    description:
      "Provided specialized care in neurorehabilitation, orthopedic recovery, and cardiopulmonary rehabilitation.",
    current: false,
  },
  {
    year: "2014 - 2016",
    role: "Physiotherapist",
    org: "Kamineni Hospitals, LB Nagar, Hyderabad",
    description:
      "Built foundation in clinical physiotherapy with exposure to diverse patient cases and rehabilitation protocols.",
    current: false,
  },
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="journey" ref={ref} className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#0d3b66]">
            Professional Journey
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#0066cc] to-[#0099ff] mx-auto mt-4" />
        </motion.div>

        <div className="relative pl-10">
          {/* Timeline gradient line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066cc] via-[#0099ff] to-[#0d3b66]" />

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative p-6 rounded-xl border transition-shadow hover:shadow-lg ${
                  item.current
                    ? "bg-[#0d3b66] border-[#0066cc]/30"
                    : "bg-[#f0f8ff] border-[#d4e4ff]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[2.85rem] top-6 w-4 h-4 rounded-full border-2 border-white ${
                    item.current
                      ? "bg-[#0099ff] shadow-[0_0_0_4px_rgba(0,153,255,0.3)]"
                      : "bg-[#0066cc] shadow-[0_0_0_4px_rgba(0,102,204,0.2)]"
                  }`}
                />

                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      item.current ? "text-[#0099ff]" : "text-[#0066cc]"
                    }`}
                  >
                    {item.year}
                  </span>
                  {item.tag && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-semibold uppercase tracking-wide ${
                        item.current
                          ? "bg-[#0099ff]/20 text-[#0099ff]"
                          : "bg-[#0066cc]/10 text-[#0066cc]"
                      }`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3
                  className={`text-xl font-bold mb-1 ${
                    item.current ? "text-white" : "text-[#0d3b66]"
                  }`}
                >
                  {item.role}
                </h3>

                <p
                  className={`text-sm font-medium mb-2 ${
                    item.current ? "text-white/60" : "text-[#4a6fa5]"
                  }`}
                >
                  {item.org}
                </p>

                <p
                  className={`text-sm leading-relaxed ${
                    item.current ? "text-white/50" : "text-[#4a6fa5]"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
