"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiSolidity,
  SiWeb3Dotjs,
} from "react-icons/si";
import { Cpu, Database, Zap } from "lucide-react";

const skillIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "Django": SiDjango,
  "PostgreSQL": SiPostgresql,
  "Solidity": SiSolidity,
  "Web3.js": SiWeb3Dotjs,
  "Smart Contracts": Cpu,
  "REST APIs": Zap,
  "AI APIs": Database,
};

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Python", "Django", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Web3 & AI",
    skills: ["Solidity", "Web3.js", "Smart Contracts", "AI APIs"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">What I use</p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Tools, languages, and frameworks.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            I work across the stack: responsive React interfaces, scalable Django backends, and smart automation for modern apps.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{group.category}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const IconComponent = skillIcons[skill];
                  return (
                    <span key={skill} className="inline-flex items-center gap-2 rounded-2xl bg-gray-200 dark:bg-white/10 px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                      {IconComponent && <IconComponent size={16} className="text-gray-600 dark:text-gray-400" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
