import Image from "next/image";
import type { Project } from "@/site.config";
import YearLabel from "./YearLabel";

export default function StudyCard({ study }: { study: Project }) {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-card md:grid-cols-[2fr_3fr]">
      <div className="relative h-72 border-b border-line bg-pastel-pink/20 sm:h-96 md:h-auto md:min-h-[320px] md:border-r md:border-b-0">
        <Image
          src={study.image}
          alt={study.imageAlt}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="p-6 md:p-8">
        <YearLabel year={study.year} size="sm" />
        <h3 className="mt-2 font-display text-3xl md:text-4xl">{study.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">
          {study.longDescription ?? study.description}
        </p>
      </div>
    </article>
  );
}
