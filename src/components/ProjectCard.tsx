"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiDjango,
  SiSolidity,
  SiWeb3Dotjs,
  SiPython,
  SiEthereum,
  SiOpenai,
} from "react-icons/si";
import { Bot, Music } from "lucide-react";

const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Next.js": SiNextdotjs,
  "Django": SiDjango,
  "AI APIs": SiOpenai,
  "Solidity": SiSolidity,
  "Web3.js": SiWeb3Dotjs,
  "Ethereum": SiEthereum,
  "Python": SiPython,
  "Telegram API": Bot,
  "yt-dlp": Music,
};

type ProjectCardProps = {
  title: string;
  desc: string;
  tech: string[];
  imgSrc: string;
  category: string;
  accent: string;
  liveUrl: string;
};

export default function ProjectCard({ title, desc, tech, imgSrc, category, accent, liveUrl }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-black/10 bg-black/5 shadow-xl shadow-black/10"
    >
      <div className="relative h-56 w-full overflow-hidden bg-slate-950">
        <Image src={imgSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" priority={title === "ClipText AI"} />
        <div className="absolute inset-x-0 bottom-0 p-4 text-sm text-white/90 backdrop-blur-sm">
          <div className="inline-flex rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-600">{category}</div>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className={`text-xl font-semibold ${accent}`}>{title}</h3>
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 transition hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-white/10"
            aria-label={`Visit ${title}`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => {
            const IconComponent = techIcons[item];
            return (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-gray-200 dark:bg-white/10 px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
                {IconComponent && <IconComponent size={12} className="text-gray-600 dark:text-gray-400" />}
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
