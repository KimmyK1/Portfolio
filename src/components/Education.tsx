import Image from "next/image";
import { config } from "@/site.config";
import YearLabel from "./YearLabel";

export default function Education() {
  return (
    <div className="space-y-6">
      {config.education.map((e) => (
        <div
          key={e.degree}
          className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-3xl border border-line bg-card p-6 md:p-8"
        >
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white md:h-28 md:w-28">
            <Image
              src={e.logo}
              alt={`${e.school} logo`}
              fill
              sizes="(min-width: 768px) 112px, 80px"
              className="object-contain p-3 md:p-4"
            />
          </div>

          <div className="min-w-0 flex-1 basis-48">
            <h3 className="font-display text-2xl md:text-4xl">{e.degree}</h3>
            <p className="mt-2 text-base text-muted md:text-lg">{e.school}</p>
          </div>

          <div className="shrink-0 md:text-right">
            <YearLabel year={e.period} size="sm" />
          </div>
        </div>
      ))}
    </div>
  );
}