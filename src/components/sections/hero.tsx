"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import { FiGlobe } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { siCodechef, siCodeforces, siLeetcode } from "simple-icons/icons";
import { Container } from "@/components/ui/container";
import type { Profile } from "@/types/content";

type HeroSectionProps = {
  profile: Profile;
};

type BrandIconData = {
  label: string;
  href: string;
  icon?: IconType;
  path?: string;
};

function BrandPathIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export function HeroSection({ profile }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  const socialLinks: BrandIconData[] = [
    { label: "Email", href: `mailto:${profile.email}`, icon: MdAlternateEmail },
    { label: "GitHub", href: profile.links.github, icon: FaGithub },
    { label: "LinkedIn", href: profile.links.linkedin, icon: FaLinkedinIn },
    { label: "LeetCode", href: profile.links.leetcode, path: siLeetcode.path },
    { label: "CodeChef", href: profile.links.codechef, path: siCodechef.path },
    { label: "Codeforces", href: profile.links.codeforces, path: siCodeforces.path },
    { label: "Crio Portfolio", href: profile.links.crio, icon: FiGlobe },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/70 pb-20 pt-10 sm:pb-28 sm:pt-14"
    >
      <Container>
        <div className="mb-10 flex items-center justify-between gap-4">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            NAVNEET KUMAR MRIDUL
          </a>
          <span className="inline-flex h-10 items-center rounded-full border border-border bg-background-elevated px-4 font-mono text-xs tracking-wide text-muted-foreground">
            OPEN TO WORK
          </span>
        </div>

        <div className="grid items-center gap-7 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-7">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-border bg-surface-soft px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground uppercase"
            >
              Software Engineer | Full-Stack Developer | GenAI Enthusiast
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="max-w-3xl whitespace-nowrap text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-foreground text-5xl">Hello I&apos;m </span> 
              <br/>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Navneet Kumar Mridul
              </span>
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border bg-background-elevated px-6 py-3 text-sm font-semibold transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={item.label}
                  title={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background-elevated text-xs font-semibold text-accent transition hover:border-accent/45 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.icon ? (
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  ) : item.path ? (
                    <BrandPathIcon path={item.path} />
                  ) : null}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="section-shell relative h-[310px] overflow-hidden rounded-3xl sm:h-[360px] lg:h-[420px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_28%,rgba(96,165,250,0.32)_0,rgba(29,78,216,0.25)_40%,rgba(11,22,39,0.94)_82%)]" />
            <div className="absolute inset-3 sm:inset-4">
              <Image
                src="/hero-ai-3d.svg"
                alt="Abstract AI-inspired 3D visual"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl border border-white/12 bg-black/20 p-3 backdrop-blur-md">
              <p className="font-mono text-xs text-white/90">
                Currently advancing Full Stack + GenAI through Crio Fellowship
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
