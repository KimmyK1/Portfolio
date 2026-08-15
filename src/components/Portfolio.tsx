"use client";

import { useState } from "react";
import { config } from "@/site.config";
import ProjectRow from "@/components/ProjectRow";
import StudyCard from "@/components/StudyCard";
import Education from "@/components/Education";

type Tab = (typeof config.tabs)[number];

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("Projects");

  const shown =
    tab === "Projects"
      ? config.projects.filter((p) => p.category === "programming")
      : tab === "Studies done"
        ? config.projects.filter((p) => p.category === "study")
        : [];

  return (
    <section className="mt-12">
      <nav className="flex gap-8 border-b border-line" role="tablist" aria-label="Portfolio sections">
        {config.tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 pb-3 text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-purple ${
              tab === t ? "border-purple text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </nav>

      <div className="mt-6">
        {tab === "Education" ? (
          <Education />
        ) : (
          <div className="space-y-3">
            {shown.map((p) =>
              p.category === "study" ? (
                <StudyCard key={p.title} study={p} />
              ) : (
                <ProjectRow key={p.title} project={p} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}