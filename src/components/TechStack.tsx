import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiUnity,
} from "react-icons/si";

// name → { icon, brand color }. Add a line here to add a tool.
const badges: { name: string; icon: IconType; color: string }[] = [
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Java", icon: FaJava, color: "#e76f51" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "C#", icon: TbBrandCSharp, color: "#8b5cf6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", icon: SiNodedotjs, color: "#8cc84b" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Unity 3D", icon: SiUnity, color: "#ffffff" },
];

export default function TechStack() {
  return (
    <section className="mt-20">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-purple">
        Toolbox
      </p>
      <h2 className="mb-7 font-display text-4xl">Tech stack</h2>
      <ul className="flex flex-wrap gap-3">
        {badges.map(({ name, icon: Icon, color }) => (
          <li
            key={name}
            className="flex items-center gap-3 rounded-2xl border border-line bg-card py-2.5 pl-3 pr-5"
          >
            <Icon size={22} color={color} aria-hidden />
            <span className="text-sm">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}