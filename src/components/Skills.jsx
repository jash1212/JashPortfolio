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

      <div className="flex flex-wrap gap-3">
        {skillsList.map((skill, idx) => {
          const Icon = skill.Icon;
          const isHover = hovered === idx;

          return (
            <motion.div
              key={skill.name}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
             whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="px-3 py-2 flex items-center gap-2 border border-gray-200 rounded-xs shadow-sm bg-white cursor-pointer">
                <Icon
                  size={20}
                  style={{ color: isHover ? skill.color : "#0f172a" }}
                  className="transition-colors duration-200"
                />
                <span className="text font-medium text-black">
                  {skill.name}
                </span>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}