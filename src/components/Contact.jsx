import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Github } from "lucide-react"

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
}

export default function Connect() {
  return (
    <div className="bg-white flex flex-col px-6 sm:px-10 p-6 font-saira">
      <motion.h1
        className="text-2xl md:text-3xl font-bold mb-6 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect <span className="font-bold text-3xl text-gray-600">#</span>
      </motion.h1>

      {/* Always a row, wrap on small screens */}
      <motion.div
        className="flex flex-row flex-wrap gap-3 sm:gap-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.div
          variants={item}
          // ✨ ADD THESE HOVER AND TRANSITION PROPS ✨
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            className="w-30 h-10 bg-black text-white hover:bg-black/90 flex items-center gap-2 px-6 py-3 rounded-4xl text-lg"
            asChild
            
          >
            <a
              href="https://x.com/JashSolanki06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-10 h-10" />X
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          // ✨ ADD THESE HOVER AND TRANSITION PROPS ✨
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            className="w-35 h-10 bg-black text-white hover:bg-black/90 flex items-center gap-2 px-6 py-3 rounded-4xl text-lg"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/jash-solanki-5a28a42a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          // ✨ ADD THESE HOVER AND TRANSITION PROPS ✨
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            className="w-30 h-10 bg-black text-white hover:bg-black/90 flex items-center gap-2 px-6 py-3 rounded-4xl text-lg"
            asChild
          >
            <a
              href="https://github.com/jash1212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}