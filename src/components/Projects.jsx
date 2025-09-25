import React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "./AnimatedBackground"

const projects = [

  {
    title: "CubeView",
    tech: ["Django", "React", "PostgreSQL", "Framer Motion"],
    description:
      "Data observability & catalog system inspired by Decube. Helps teams detect incidents early, track lineage, monitor data quality, and auto-generate documentation.",
    features: [
      "Developed a lightweight platform for cataloging, lineage tracking, and data quality checks.",
"Integrated anomaly detection (null spikes, schema drift, volume drops).",
"Built secure REST APIs with Django and responsive frontend in React.",
"Added a custom rule engine for flexible quality checks."

    ],
    link: "https://github.com/jash1212/CubeView",
  },
  {
    title: "Railway Management System",
    tech: ["Java", "MySQL"],
    description:
      "Project for train ticket booking, cancellation with refunds, and real-time seat allocation using custom data structures.",
    features: [
       "Console-based railway reservation system with train, passenger, and ticket modules.",
"Implemented booking, cancellation, and refund with SQL integration.",
"Added payment handling and a custom queue structure for efficient booking."
    ],
    link: "https://github.com/jash1212/RailwayManagementSystem",
  },
  {
    title: "CareerPrep (Resume Analyzer)",
    tech: ["FastAPI", "React", "SQLalchemy"],
    description:
      "AI-powered web app that analyzes resumes, scores them against job descriptions, and provides actionable improvement suggestions.",
    features: [
      "Resume scoring with detailed feedback",
      "Job description matching",
      "Skill recommendations and gap analysis",
      "Clean dashboard with interactive charts",
    ],
    link: "https://github.com/Anuradha-bhaskar/CareerPrep",
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  }

  return (
    <>
    <AnimatedBackground/>
    <section id="projects" className="relative  text-black py-6  md:px-12 font-saira">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold mb-9 text-left"
        >
          Projects
          <span className="font-bold text-3xl text-gray-600"> #</span>
        </motion.h2>

        <div className="flex flex-col gap-14 text-left">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col md:flex-row gap-6"
            >
              {/* Project card */}
              <Card className="border-2 border-black/10 bg-white text-gray-800 shadow-md rounded-xs hover:shadow-xl flex-1 flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold tracking-wide">
                    {project.title}
                    
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 mb-4">{project.description}</p>

                  {/* Features list */}
                  <ul className="list-disc list-inside text-black/80 mb-4 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-s font-semibold border border-black/30 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                  
                    asChild
                    variant="outline"
                    className="w-32 border-1 bg-black border-black text-white font-bold rounded hover:bg-white hover:text-black transition-colors"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-lg"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    </>
  )
}
