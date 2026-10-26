import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { config } from "@/site.config";

export default function Hero() {
  const { hero, person } = config;
  return (
    <header>
      <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">
        {hero.eyebrow}
      </p>
      <h1 className="max-w-3xl font-display text-6xl leading-[1.02] md:text-7xl">
        {hero.titleBefore}
        <span className="text-purple">{hero.titleHighlight}</span>
        {hero.titleAfter}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl text-muted">
        {hero.subtitle}
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
        <a
          href={`mailto:${person.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-purple"
        >
          <FiMail size={16} aria-hidden />
          Email me
        </a>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-purple focus-visible:outline-2 focus-visible:outline-purple"
        >
          <FaLinkedin size={16} aria-hidden />
          LinkedIn
        </a>
        <a
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-purple focus-visible:outline-2 focus-visible:outline-purple"
        >
          <SiGithub size={16} aria-hidden />
          GitHub
        </a>
        <a
          href={person.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-purple focus-visible:outline-2 focus-visible:outline-purple"
        >
          CV ↓
        </a>
      </div>
    </header>
  );
}