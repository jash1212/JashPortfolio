import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6 },
    },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  const sectionClass = "mb-8";
  const headingClass = "text-2xl font-semibold mb-3 border-b border-gray-400 pb-1";

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-10 text-gray-800 dark:text-gray-100"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item} className="text-4xl font-bold mb-2">
        Jash Solanki
      </motion.h1>
      <motion.p variants={item} className="mb-6">
        <a href="mailto:jashsolanki66@gmail.com" className="underline hover:text-gray-500">
          jashsolanki66@gmail.com
        </a>{" "}
        |{" "}
        <a href="https://linkedin.com/in/jash-solanki-5a28a42a7/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://github.com/jash1212" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">
          GitHub
        </a>
      </motion.p>

      <motion.section variants={item} className={sectionClass}>
        <h2 className={headingClass}>Education</h2>
        <p>Bachelor of Technology in Computer Science (2023 – 2027)</p>
        <p>LJIET, Ahmedabad, India</p>
      </motion.section>

      <motion.section variants={item} className={sectionClass}>
        <h2 className={headingClass}>Skills</h2>
        <ul className="list-disc ml-6">
          <li>Programming: Java, Python, JavaScript</li>
          <li>Frameworks: Django, React, FastAPI</li>
          <li>Databases: MySQL, MongoDB</li>
          <li>Tools: Git, REST APIs, VS Code</li>
        </ul>
      </motion.section>

      <motion.section variants={item} className={sectionClass}>
        <h2 className={headingClass}>Projects</h2>
        <div className="mb-4">
          <a href="https://github.com/jash1212/CubeView" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            CubeView – Data Quality Platform
          </a>
          <p>React, Django, MySQL</p>
          <ul className="list-disc ml-6">
            <li>Cataloging, lineage tracking, and data quality checks.</li>
            <li>Anomaly detection (null spikes, schema drift, volume drops).</li>
            <li>Secure REST APIs and responsive React frontend.</li>
            <li>Custom rule engine for flexible quality checks.</li>
          </ul>
        </div>
        <div className="mb-4">
          <a href="https://github.com/jash1212/RailwayManagementSystem" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            Railway Management System
          </a>
          <p>Java, MySQL</p>
          <ul className="list-disc ml-6">
            <li>Console-based reservation system with train, passenger, and ticket modules.</li>
            <li>Booking, cancellation, refund with SQL integration.</li>
            <li>Payment handling and custom queue structure for efficient booking.</li>
          </ul>
        </div>
        <div>
          <a href="https://github.com/Anuradha-bhaskar/CareerPrep" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            CareerPrep – Career Preparation Platform (Group Project)
          </a>
          <p>FastAPI, React, MySQL</p>
          <ul className="list-disc ml-6">
            <li>Team project with FastAPI backend & Clerk authentication.</li>
            <li>Integrated frontend and database seamlessly.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section variants={item} className={sectionClass}>
        <h2 className={headingClass}>Certificates</h2>
        <ul className="list-disc ml-6">
          <li>Introduction to Java – Coursera (LearnQuest)</li>
          <li>Inheritance and Data Structures in Java – Coursera (University of Pennsylvania)</li>
          <li>Exploratory Data Analysis for Machine Learning – Coursera (IBM)</li>
        </ul>
      </motion.section>

      <motion.section variants={item} className={sectionClass}>
        <h2 className={headingClass}>Achievements</h2>
        <ul className="list-disc ml-6">
          <li>Participated in Nirma Hackathon 6.0</li>
        </ul>
      </motion.section>
    </motion.div>
  );
}
