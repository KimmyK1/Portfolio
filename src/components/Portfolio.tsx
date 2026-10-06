"use client";

import { useState } from "react";
import { config } from "@/site.config";
import ProjectRow from "@/components/ProjectRow";
import StudyCard from "@/components/StudyCard";
import Education from "@/components/Education";

type Tab = (typeof config.tabs)[number];

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("Projects");

  // Newest first; ties keep their order from the config file.
  const byYear = [...config.projects].sort((a, b) => b.year - a.year);

  const shown =
    tab === "Projects"
      ? byYear.filter((p) => p.category === "programming")
      : tab === "Studies done"
        ? byYear.filter((p) => p.category === "study")
        : [];

  return (
    <section className="mt-12">
      <nav
        className="grid grid-cols-3 gap-1.5 rounded-2xl border border-line bg-card p-1.5 sm:inline-grid"
        role="tablist"
        aria-label="Portfolio sections"
      >
        {config.tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-xl px-3 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-purple sm:px-6 ${
              tab === t ? "bg-purple text-bg shadow-sm" : "text-muted hover:bg-line hover:text-ink"
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