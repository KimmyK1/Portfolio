import Image from "next/image";
import type { Project } from "@/site.config";
import YearLabel from "@/components/YearLabel";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-card transition-colors hover:border-purple/40">
      <div
        className="relative overflow-hidden border-b border-line bg-purple/10"
        style={{ aspectRatio: project.imageAspect ?? "2/1" }}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-6 md:p-8">
        <YearLabel year={project.year} size="sm" />
        <h3 className="mt-2 font-display text-3xl transition-colors group-hover:text-purple md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-2xl text-base text-muted md:text-lg">
          {project.description}
        </p>

        {project.links && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.download
                  ? { download: true }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-block rounded-full border border-purple/50 px-4 py-2 text-sm text-purple transition-colors hover:bg-purple hover:text-bg focus-visible:outline-2 focus-visible:outline-purple"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
