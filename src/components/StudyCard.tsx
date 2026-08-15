import Image from "next/image";
import type { Project } from "@/site.config";

export default function StudyCard({ study }: { study: Project }) {
  return (
    <article className="grid gap-6 rounded-3xl border border-line bg-card p-6 md:grid-cols-[280px_1fr]">
      <div className="relative h-48 overflow-hidden rounded-2xl bg-pastel-pink/20 md:h-full md:min-h-[200px]">
        <Image
          src={study.image}
          alt={study.imageAlt}
          fill
          sizes="280px"
          className="object-cover"
        />
      </div>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl">{study.title}</h3>
          <span className="shrink-0 text-sm text-muted">{study.year}</span>
        </div>
        <p className="mt-3 leading-relaxed text-muted">
          {study.longDescription ?? study.description}
        </p>
      </div>
    </article>
  );
}