"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Facebook, Twitter, Download, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/tethcode", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tethcode", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61560838653409", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/tethcode", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:tethcode@gmail.com", label: "Email" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 dark:bg-slate-950/70 backdrop-blur-2xl text-white shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white transition hover:text-blue-300">
          Emmanuel Yakubu
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-200 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Emmanuel_Yakubu_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            aria-label="Download Resume"
          >
            <Download size={16} />
            Resume
          </a>
          <div className="hidden items-center gap-3 md:flex">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base text-white transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
