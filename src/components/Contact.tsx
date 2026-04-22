"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">Let&apos;s connect</p>
        <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Bring your next product to life.</h2>
        <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
          I&apos;m available for internships, contract work, and collaboration on smart web applications. Send a message and let&apos;s build something useful.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:tethcode@gmail.com"
            className="rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-blue-400"
          >
            Email me
          </a>
          <a
            href="https://github.com/tethcode"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-8 py-4 text-sm text-gray-900 dark:text-white transition hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4 text-white/80">
          <a href="https://github.com/tethcode" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={24} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/tethcode" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
          </a>
          <a href="mailto:tethcode@gmail.com" aria-label="Email">
            <Mail size={24} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
