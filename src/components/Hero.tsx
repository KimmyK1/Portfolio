import { config } from "@/site.config";

export default function Hero() {
  const { hero } = config;
  return (
    <header>
      <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">
        {hero.eyebrow}
      </p>
      <h1 className="max-w-4xl font-display text-5xl leading-[1.02] md:text-6xl">
        {hero.titleLine1} {" "}
        <em className="text-purple">{hero.titleLine2}</em>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        {hero.subtitle}
      </p>
    </header>
  );
}