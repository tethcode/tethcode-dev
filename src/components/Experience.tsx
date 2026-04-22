"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Calendar,
  Briefcase,
  Award,
  ExternalLink,
  Code,
  Building,
  ArrowUpRight,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiPostgresql, 
  SiTailwindcss, 
  SiGit, 
  SiDjango,
  SiPython,
  SiSolidity
} from "react-icons/si";
import { FaHardHat, FaRobot, FaDatabase } from "react-icons/fa"; // For Hardhat/Gemini/API

const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "PostgreSQL": SiPostgresql,
  "Tailwind CSS": SiTailwindcss,
  "Git": SiGit,
  "Django": SiDjango,
  "Python": SiPython,
  "Solidity": SiSolidity,
  "Hardhat": FaHardHat,
  "Google Gemini API": FaRobot,
  "REST APIs": FaDatabase,
};

const experienceData = [
  {
    id: 1,
    company: "ClipText AI",
    position: "Founder & Full Stack Developer",
    duration: "2025 - Present",
    location: "Gombe, Nigeria",
    type: "Startup",
    description: "Architected and deployed an AI-driven platform that automates content creation, transforming video scripts into professional, structured blog posts through intelligent API integration.",
    logo: "/cliptextlogo.png", 
    achievements: [
      "Architected an automated pipeline connecting Next.js and Django to transform YouTube transcriptions into structured blog posts using Google Gemini AI.",
      "Designed a performance-optimized, motion-rich UI ensuring a seamless content creation experience across mobile and desktop devices.",
      "Managed the full software development lifecycle, deploying to Vercel/Render with secure authentication and production-grade API configurations.",
    ],
    technologies: ["Next.js", "TypeScript", "Django", "PostgreSQL", "Google Gemini API", "Tailwind CSS"],
    website: "https://cliptext.vercel.app/",
    impact: { users: "100+", features: "5+", uptime: "99.9%" },
    color: "from-blue-500 to-cyan-500",
    icon: Rocket,
  },
  {
    id: 2,
    company: "Code Dynamite",
    position: "Backend Developer",
    duration: "Feb 2025 - Present",
    location: "Remote",
    type: "Team/Collaborative",
    description: "Served as the sole Backend Developer in a collaborative team environment, responsible for architecting server-side logic and ensuring seamless integration with frontend services.",
    logo: "/dynamite.svg", 
    achievements: [
      "Led end-to-end backend development, independently architecting and maintaining server-side infrastructure for team projects.",
      "Established highly efficient communication protocols with frontend developers to ensure rapid feature integration and API consistency.",
      "Proactively explored and integrated cutting-edge technologies to solve complex problems and improve overall project scalability.",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "Git", "Postman"],
    website: "#",
    impact: { collaboration: "High", autonomy: "100%", efficiency: "Improved" },
    color: "from-yellow-500 to-orange-500",
    icon: Users,
  },
  {
    id: 3,
    company: "Buildit",
    position: "Backend Developer",
    duration: "2025 - Present",
    location: "Remote",
    type: "Tech Team",
    description: "Developed and optimized backend infrastructure for digital products, focusing on robust data validation, automated workflows, and secure system architecture.",
    logo: "/buildit.svg",
    achievements: [
      "Engineered a scalable Form-to-Mail system, managing backend logic, data validation, and automated email delivery workflows.",
      "Implemented secure data management practices to ensure integrity across digital product forms.",
      "Collaborated with cross-functional teams to integrate backend services and deliver critical product features.",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "Git"],
    website: "#",
    impact: { workflows: "3+", performance: "+40%", security: "100%" },
    color: "from-purple-500 to-pink-500",
    icon: Target,
  },
  {
    id: 4,
    company: "Self-Employed",
    position: "Full Stack & Blockchain Developer",
    duration: "2021 - Present",
    location: "Gombe, Nigeria",
    type: "Freelance",
    description: "Developing decentralized applications (dApps) and scalable web solutions. Focused on writing secure smart contracts and integrating complex blockchain functionality with robust Django-powered backends.",
    logo: "/profile.jpg",
    achievements: [
      "Engineered full-stack decentralized applications (dApps) utilizing Django REST Framework for backend logic and Next.js for high-performance frontends.",
      "Developed and deployed secure smart contracts using Solidity and Hardhat, ensuring efficient gas management and transaction integrity.",
      "Integrated complex blockchain protocols with modern web interfaces, bridging the gap between decentralized assets and traditional user workflows.",
    ],
    technologies: ["Django", "Django REST Framework", "Next.js", "Solidity", "Hardhat", "TypeScript", "Python"],
    website: "https://tethcode.vercel.app",
    impact: { projects: "15+", focus: "Web3 & Full-Stack", reliability: "High" },
    color: "from-orange-500 to-red-500",
    icon: Star,
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="experience" className="relative px-6 py-20 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6"
          >
            <Briefcase size={16} />
            Professional Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl font-bold tracking-tight text-white mb-4"
          >
            Crafting Digital <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Experiences</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg leading-8 text-gray-300"
          >
            From startup co-founder to freelance innovator, each role has shaped my approach to building exceptional digital solutions.
          </motion.p>
        </motion.div>

        {/* Experience Cards Container */}
        <motion.div
          ref={containerRef}
          style={{ y }}
          className="relative"
        >
          <div className="grid gap-8 lg:gap-12">
            {experienceData.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Connecting Line */}
                  <div className="absolute left-1/2 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative ${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl hover:border-white/20 transition-all duration-500 group">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                            <IconComponent size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                            <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${exp.color}`}>
                              {exp.type}
                            </div>
                          </div>
                        </div>

                        {exp.website !== "#" && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 group/link"
                          >
                            <ExternalLink size={16} className="text-gray-400 group-hover/link:text-blue-400 transition-colors" />
                          </a>
                        )}
                      </div>

                      {/* Position & Meta */}
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-3">{exp.position}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                      {/* Impact Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                        {Object.entries(exp.impact).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Code size={16} className="text-blue-400" />
                          <span className="text-sm font-semibold text-gray-200">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => {
                            const TechIcon = techIcons[tech];
                            return (
                              <motion.span
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-gray-200 border border-white/5 hover:bg-white/15 hover:border-white/20 transition-all duration-200"
                              >
                                {TechIcon && <TechIcon size={14} className="text-blue-400" />}
                                {tech}
                              </motion.span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={16} className="text-purple-400" />
                          <span className="text-sm font-semibold text-gray-200">Key Achievements</span>
                        </div>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false, amount: 0.2 }}
                              transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                              <span className="text-sm text-gray-300 leading-relaxed">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Company Logo Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className={`relative ${isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="flex justify-center">
                      <div className="relative w-32 h-32 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl overflow-hidden group">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-cover rounded-2xl"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-gray-200 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
            <TrendingUp size={18} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Ready for the next challenge</span>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const companyTypeColors = {
  Startup: "from-emerald-500 to-teal-600",
  "Tech Company": "from-blue-500 to-indigo-600",
  "Tech Training": "from-purple-500 to-pink-600",
  Freelance: "from-orange-500 to-red-600",
};

