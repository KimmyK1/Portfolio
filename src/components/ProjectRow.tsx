import Image from "next/image";
import type { Project } from "@/site.config";
import YearLabel from "@/components/YearLabel";

export default function ProjectRow({ project }: { project: Project }) {
  const accent =
    project.category === "programming" ? "bg-purple/20" : "bg-pastel-pink/20";

  return (
    <article className="group grid items-center gap-6 rounded-3xl border border-line bg-card p-6 transition-colors hover:border-purple/40 hover:bg-deep/10 md:grid-cols-[100px_1fr_270px]">
      <div className="w-24 shrink-0 pt-1">
        <YearLabel year={project.year} />
      </div>

      <div>
        <h3 className="font-display text-2xl transition-colors group-hover:text-purple">
          {project.title}
        </h3>
        <p className="mt-1 text-base text-muted">{project.description}</p>

        {project.links && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.download
                  ? { download: true }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-block rounded-full border border-purple/50 px-4 py-1.5 text-sm text-purple transition-colors hover:bg-purple hover:text-bg focus-visible:outline-2 focus-visible:outline-purple"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      <div
        className={`relative hidden h-32 overflow-hidden rounded-2xl md:block ${accent}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="240px"
          className="object-contain opacity-70 transition-opacity group-hover:opacity-100"
        />
      </div>
    </article>
  );
}