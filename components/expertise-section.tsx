"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Bone, Heart, Activity, CheckCircle2 } from "lucide-react";

const expertiseData = [
  {
    icon: Brain,
    title: "Neurorehabilitation",
    description:
      "Comprehensive rehabilitation for neurological conditions including stroke, traumatic injuries, and vestibular disorders.",
    items: [
      "Road Traffic Accident (RTA) cases",
      "Traumatic Brain Injury (TBI)",
      "Stroke rehabilitation",
      "Vestibular rehabilitation",
      "Spinal Cord Injury management",
      "Guillain-Barré Syndrome (GBS)",
    ],
  },
  {
    icon: Bone,
    title: "Orthopedic Rehabilitation",
    description:
      "Advanced post-operative care and recovery for musculoskeletal injuries and joint replacements.",
    items: [
      "Post-operative rehabilitation (fractures, ligament injuries, meniscus tears)",
      "Avascular Necrosis (AVN)",
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
    ],
  },
  {
    icon: Heart,
    title: "Cardiopulmonary Rehabilitation",
    description:
      "Evidence-based recovery programs for cardiac and pulmonary conditions to restore function and health.",
    items: [
      "Post-Coronary Artery Bypass Grafting (CABG)",
      "Other cardiac and pulmonary recovery cases",
    ],
  },
  {
    icon: Activity,
    title: "Oncology Rehabilitation",
    description:
      "Specialized physiotherapy support for cancer patients to maintain function and quality of life.",
    items: [
      "Physiotherapy support for cancer patients as required",
    ],
  },
];

export function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="expertise" ref={ref} className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0d3b66]">
            Clinical Specializations
          </h2>
          <div className="h-1 w-20 bg-[#0066cc] mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseData.slice(0, 3).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#e6f0ff] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066cc] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#0066cc] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-[#0d3b66] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#4a6fa5] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
