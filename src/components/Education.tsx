import Image from "next/image";
import { config } from "@/site.config";
import YearLabel from "./YearLabel";

export default function Education() {
  return (
    <div className="space-y-6">
      {config.education.map((e) => (
        <div
          key={e.degree}
          className="flex items-center gap-5 rounded-3xl border border-line bg-card p-6 md:gap-6 md:p-8"
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

          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl md:text-4xl">{e.degree}</h3>
            <p className="mt-2 text-lg text-muted md:text-xl">{e.school}</p>
            {/* On narrow screens the period sits under the school instead of wrapping below the logo */}
            <div className="mt-3 md:hidden">
              <YearLabel year={e.period} size="sm" />
            </div>
          </div>

          <div className="hidden shrink-0 text-right md:block">
            <YearLabel year={e.period} size="sm" />
          </div>
        </div>
      ))}
    </div>
  );
}