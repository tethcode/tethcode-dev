"use client";

import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "ClipText AI",
    desc: "AI-powered platform that transforms YouTube videos into publish-ready blog content.",
    tech: ["Next.js", "Django", "AI APIs"],
    imgSrc: "/cliptext.png",
    category: "Full-Stack",
    accent: "text-cyan-300",
    liveUrl: "https://cliptext.vercel.app/",
  },
  {
    title: "CoffeeShop",
    desc: "Web3 dApp for crypto donations and buy-me-a-coffee support using Solidity.",
    tech: ["Solidity", "Web3.js", "Ethereum"],
    imgSrc: "/web3.png",
    category: "Web3",
    accent: "text-amber-300",
    liveUrl: "https://github.com/tethcode/CoffeeShop",
  },
  {
    title: "TG Music Bot",
    desc: "Telegram automation bot that downloads music for users through a simple chat interface.",
    tech: ["Python", "Telegram API", "yt-dlp"],
    imgSrc: "/bot.jpg",
    category: "Bot",
    accent: "text-violet-300",
    liveUrl: "https://t.me/MelodyFetch_bot",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">Featured work</p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Projects that show what I build.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            These projects showcase AI workflows, Web3 experimentation, and backend systems built with real technologies.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <p className="rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 shadow-lg shadow-black/10 backdrop-blur-md">
            More Projects in development
          </p>
        </div>
      </div>
    </section>
  );
}
