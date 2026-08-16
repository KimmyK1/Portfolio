import Image from "next/image";
import type { Project } from "@/site.config";
import YearLabel from "./YearLabel";

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
        <YearLabel year={study.year} />
        <h3 className="mt-2 font-display text-2xl">{study.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">
          {study.longDescription ?? study.description}
        </p>
      </div>
    </article>
  );
}