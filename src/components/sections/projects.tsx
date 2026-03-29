"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/content";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId) ?? null,
    [activeId, projects],
  );

  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected Projects"
          description="Featured builds spanning full-stack product development, architecture, and implementation quality."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <article className="group section-shell flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{project.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>

                {(project.githubUrl || project.demoUrl) && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-white hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-accent transition group-hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  View Build Details
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end bg-slate-950/60 p-4 backdrop-blur-sm sm:items-center sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.dialog
              open
              aria-labelledby="project-modal-title"
              className="section-shell max-h-[85vh] w-full max-w-3xl overflow-auto rounded-3xl p-0 text-foreground"
              initial={{ y: 26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3
                    id="project-modal-title"
                    className="text-2xl font-semibold tracking-tight text-foreground"
                  >
                    {activeProject.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground hover:border-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span className="font-semibold text-foreground">Challenge:</span>{" "}
                  {activeProject.problem}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span className="font-semibold text-foreground">Approach:</span>{" "}
                  {activeProject.solution}
                </p>

                <h4 className="mt-6 text-sm font-semibold tracking-wide uppercase text-foreground">
                  Key Features
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:text-base">
                  {activeProject.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>

              </div>
            </motion.dialog>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
