"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Bone, Heart, Activity, CheckCircle2 } from "lucide-react";

const expertiseData = [
  {
    icon: Brain,
    title: "Neurorehabilitation",
    description:
      "Comprehensive care for Road Traffic Accident (RTA) and Traumatic Brain Injury (TBI) cases with advanced rehabilitation protocols.",
    items: [
      "RTA Cases",
      "TBI Cases",
      "Stroke Rehabilitation",
      "Vestibular Rehabilitation",
    ],
  },
  {
    icon: Activity,
    title: "Spinal Cord Injuries",
    description:
      "Specialized management and rehabilitation programs for spinal cord injury patients to maximize recovery and independence.",
    items: [
      "Complete & Incomplete Injuries",
      "Functional Training",
      "Mobility Restoration",
    ],
  },
  {
    icon: Brain,
    title: "Guillain-Barré Syndrome",
    description:
      "Expert care for GBS patients with customized rehabilitation plans for optimal recovery and strength building.",
    items: [
      "Acute Phase Management",
      "Progressive Rehabilitation",
      "Strength Training",
    ],
  },
  {
    icon: Bone,
    title: "Orthopedic Recovery",
    description:
      "Advanced post-operative care for TKR, THR, and complex fractures with Mulligan and Fascia manipulation techniques.",
    items: [
      "Total Knee Replacement",
      "Total Hip Replacement",
      "Complex Fractures",
    ],
  },
  {
    icon: Heart,
    title: "Cardiac Rehabilitation",
    description:
      "Evidence-based recovery programs for Post-CABG cardiac patients ensuring safe and effective return to daily activities.",
    items: [
      "Post-CABG Recovery",
      "Heart Health Programs",
      "Functional Restoration",
    ],
  },
  {
    icon: Activity,
    title: "Oncology Physiotherapy",
    description:
      "Targeted physiotherapy support for cancer patients focusing on maintaining function and quality of life.",
    items: [
      "Pre & Post Surgery Care",
      "Fatigue Management",
      "Mobility Support",
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
