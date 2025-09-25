import React from "react"
import { motion } from "framer-motion"
import jashPic from "../assets/jashPic.jpg"
import Resume from "../assets/JashCV.pdf"

export default function Navbar() {
  const container = {
    hidden: { y: -80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 14, staggerChildren: 0.12 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  }

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-400 font-saira"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 font-saira">
        {/* Left: Name / Logo */}
        <motion.a
          variants={item}
          href="#hero"
          className="
            flex items-center gap-3 
            font-bold 
            text-xl      /* mobile size */
            sm:text-2xl  /* ≥640px */
            md:text-3xl  /* ≥768px */
            tracking-wide uppercase 
            hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >


          JASH&nbsp;SOLANKI
        </motion.a>

        {/* Resume button – all screens */}
        <motion.a
          variants={item}
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className="
            text-gray-700 
            text-base sm:text-lg md:text-xl   /* smaller text on phones */
            font-medium px-4 py-2
           "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </div>
    </motion.header>
  )
}
