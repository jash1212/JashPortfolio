import React from "react";
import { motion } from "framer-motion";

// About.jsx with animations (monochromatic)

export default function About({
  title = "Frontend Developer",
  location = "Your City, Country",
  bio = `I'm a passionate B.Tech student in Computer Science (3rd year) who loves building clean, responsive, and modern designs. I enjoy making cool projects, whether they're small experiments or larger applications. With strong problem-solving skills, I focus on writing efficient code and turning ideas into reality.`,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-white text-black py-7 px-3 md:px-12"
    >
     
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-center">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-7 text-left">
              About<span className="font-bold text-3xl text-gray-600"> #</span>
            </h2>

            <div className="mt-2 text-base md:text-lg leading-relaxed text-gray-800 text-center lg:text-left">
              <p>{bio}</p>
            </div>
          </motion.div>
        </div>
      
    </motion.section>
  );
}
