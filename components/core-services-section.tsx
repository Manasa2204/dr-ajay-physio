"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Bone,
  Heart,
  Ribbon,
  Activity,
  Home,
  CheckCircle2,
} from "lucide-react";

const services = [
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
      "Advanced post-operative care for joint replacements, fractures, and musculoskeletal conditions.",
    items: [
      "TKR & THR Rehabilitation",
      "Post-Fracture Care",
      "Ligament Repair Recovery",
    ],
  },
  {
    icon: Heart,
    title: "Cardiac Rehabilitation",
    description:
      "Evidence-based recovery programs for post-surgical cardiac patients and heart health optimization.",
    items: [
      "Post-CABG Rehabilitation",
      "Cardiac Surgery Recovery",
      "Endurance Training",
    ],
  },
  {
    icon: Activity,
    title: "Oncology Physiotherapy",
    description:
      "Compassionate care focusing on mobility, fatigue management, and quality of life for cancer patients.",
    items: ["Fatigue Management", "Mobility Restoration", "Pain Management"],
  },
];

export function CoreServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0d3b66]">Core Expertise</h2>
          <p className="text-[#4a6fa5] mt-4 max-w-xl mx-auto">
            Comprehensive rehabilitation services tailored to your needs
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#0066cc] to-[#0099ff] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl border border-[#d4e4ff] hover:border-[#0066cc] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066cc]/10 to-[#0099ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[#0066cc]" />
                </div>

                <h3 className="text-xl font-bold text-[#0d3b66] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#4a6fa5] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#4a6fa5]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0099ff] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
