import Image from "next/image";
import { config } from "@/site.config";

export default function Education() {
  return (
    <div className="space-y-4">
      {config.education.map((e) => (
        <div
          key={e.degree}
          className="flex items-center gap-5 rounded-3xl border border-line bg-card p-6"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white">
            <Image
              src={e.logo}
              alt={`${e.school} logo`}
              fill
              sizes="56px"
              className="object-contain p-1.5"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-display text-2xl">{e.degree}</h3>
            <p className="mt-1 text-muted">{e.school}</p>
          </div>

          <span className="shrink-0 text-sm text-purple">{e.period}</span>
        </div>
      ))}
    </div>
  );
}