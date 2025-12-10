import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
// ✨ 1. Import FaJava from the 'fa' (Font Awesome) pack
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";


const skillsList = [
  // ✨ 2. Use the correct FaJava icon component
  { name: "Java", Icon: FaJava, color: "#f89820" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express.js", Icon: SiExpress, color: "#000000" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Python", Icon: SiPython, color: "#3776ab" },
  { name: "Django", Icon: SiDjango, color: "#092e20" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#38bdf8" },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative text-black py-5 px-6 md:px-12 font-saira">
      <h2 className="text-2xl md:text-3xl font-bold mb-9 text-left">
        Tech Stack
        <span className="font-bold text-3xl text-gray-600"> #</span>
      </h2>

       <div className="flex flex-wrap gap-4">
        {skillsList.map((skill, idx) => {
          const Icon = skill.Icon
          const isHover = hovered === idx

          return (
            <motion.div
              key={skill.name}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <Card
                className="
                  relative px-5 py-2 flex items-center gap-3 rounded-3xl cursor-pointer 
                  border border-black/10
                  bg-white/30
                  backdrop-blur-2xl
                  shadow-[inset_0_0_20px_rgba(255,255,255,0.4),0_4px_20px_rgba(0,0,0,0.08)]
                  overflow-hidden
                "
              >
                {/* Soft highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-transparent opacity-40 pointer-events-none" />

                {/* Subtle dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent opacity-20 pointer-events-none" />

                {/* Liquid Ripple */}
                {isHover && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
                      absolute w-24 h-24 rounded-full 
                      bg-white/40 blur-2xl 
                      pointer-events-none
                      left-1/2 top-1/2 
                      -translate-x-1/2 -translate-y-1/2
                    "
                  />
                )}

                {/* Gloss shine on hover */}
                <motion.div
                  className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 opacity-0"
                  animate={{ opacity: isHover ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                <Icon
                  size={20}
                  style={{ color: isHover ? skill.color : "#0f172a" }}
                  className="transition-all duration-300 drop-shadow-sm"
                />

                <span className="font-medium text-black drop-shadow-sm">
                  {skill.name}
                </span>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}