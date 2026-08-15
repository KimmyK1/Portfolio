import { config } from "@/site.config";

export default function Footer() {
  const { person, footer } = config;
  return (
    <footer className="mt-20">
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-line bg-card p-8">
        <div>
          <p className="font-display text-3xl">{footer.headline}</p>
          <p className="mt-1 text-sm text-muted">{footer.subline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${person.email}`}
            className="rounded-full bg-purple px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-purple"
          >
            Email me
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-purple focus-visible:outline-2 focus-visible:outline-purple"
          >
            LinkedIn
          </a>
          <a
            href={person.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-purple focus-visible:outline-2 focus-visible:outline-purple"
          >
            CV ↓
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {person.name} · {person.location}
      </p>
    </footer>
  );
}