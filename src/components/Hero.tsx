"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiNextdotjs, SiDjango, SiSolidity, SiOpenai } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 lg:px-8">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-200"
          >
            Full-stack developer focused on AI, Web3, and intuitive product experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-black leading-tight tracking-tight text-black dark:text-white sm:text-6xl"
          >
            I build modern web products with <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">AI</span> and real-world scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg leading-8 text-gray-700 dark:text-gray-300"
          >
            My portfolio brings together fast Next.js interfaces, Django-powered backend workflows, and blockchain automation — all designed to solve practical problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-400">
              Explore projects
              <ArrowRight size={16} />
            </a>
            <a href="mailto:tethcode@gmail.com" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-6 py-3 text-sm text-black dark:text-white transition hover:border-blue-400 hover:bg-black/5 dark:hover:bg-white/5">
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400 dark:text-gray-400"
          >
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 dark:bg-white/10 px-4 py-2">
              <SiNextdotjs size={16} className="text-gray-400" />
              Next.js
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 dark:bg-white/10 px-4 py-2">
              <SiDjango size={16} className="text-gray-400" />
              Django
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 dark:bg-white/10 px-4 py-2">
              <SiSolidity size={16} className="text-gray-400" />
              Solidity
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 dark:bg-white/10 px-4 py-2">
              <SiOpenai size={16} className="text-gray-400" />
              AI APIs
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          <div className="relative z-10 flex flex-col items-center gap-5 p-6">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10 dark:border-white/10 bg-slate-950">
              <Image
                src="/profile.jpg"
                alt="Emmanuel Yakubu"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-300 dark:text-blue-300">Hello, I&apos;m</p>
              <h2 className="mt-2 text-3xl font-bold text-white dark:text-white">Emmanuel Yakubu</h2>
              <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">Full-stack Developer • AI & Web3 • React + Django</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
