// ======================================================================
// SITE CONFIG — edit this file to change any content on the site.
// No other file needs touching for text/link/project updates.
// ======================================================================

export type ProjectCategory = "programming" | "study";

export interface Project {
  title: string;
  year: number;
  category: ProjectCategory;
  description: string;
  longDescription?: string;   // used by studies
  image: string;
  imageAlt: string;
  links?: {                   // now optional + plural
    label: string;
    href: string;
    download?: boolean;
  }[];
}

export const config = {
  person: {
    name: "Kimmy Karlsson",
    location: "Stockholm",
    linkedin: "https://www.linkedin.com/in/kimmy-karlsson-63409a255/",   // ← fill in
    email: "kimmykochar01@outlook.com",                               // ← fill in
    cvPath: "/cv.pdf",                                      // file in /public
  },

  hero: {
    eyebrow: "Portfolio · Kimmy Karlsson · Sweden",
    // The one-sentence pitch. First line plain, second line purple italic.
    titleLine1: "If it doesn't work with a screen reader,",
    titleLine2: "it doesn't work.",
    subtitle:
      "MSc student in Interactive Media Technology at KTH, building interactive work combining user studies and programming. Currently working with the Let's Uptech Initiative at Knightec Group",
  },

  tabs: ["Projects", "Studies done", "Education"] as const,

  projects: [
    {
        title: "Water Shader",
        year: 2025,
        category: "programming",
        description:
            "Real-time stylized water rendering in Unity with custom HLSL shaders.",
        image: "/projects/water-shader-v2.png",
        imageAlt: "Stylized water shader running in Unity",
        links: [
            { label: "Watch demo", href: "https://www.youtube.com/watch?v=yoi7j73QCs8&list=LL&index=8" },
            { label: "Read the blog", href: "https://dh2323-waterfall-blog.vercel.app/" },
            { label: "Download project", href: "https://github.com/KimmyK1/Waterfall", download: false },
        ],
        },
    {
      title: "MovieMates",
      year: 2025,
      category: "programming",
      description:
        "Web app where friends swipe to discover films to watch together",
      image: "/projects/moviemates.png",
      imageAlt: "MovieMates app interface",
      links: [{ label: "View", href: "https://moviemates-app.vercel.app/" }],
    },
    {
      title: "Statistically Single",
      year: 2024,
      category: "programming",
      description: "Data-driven visualization project exploring dating statistics.",
      image: "/projects/statistically-single.png",
      imageAlt: "Statistically Single visualization",
      links: [{ label: "View", href: "https://statistically-single.vercel.app/" }],
    },
    {
      title: "Note to Sea",
      year: 2024,
      category: "study",
      description: "Concept and user study on message-in-a-bottle digital communication.",
      longDescription:
            "A group project exploring what it means to design a ritual for people that doesn't yet have one. We created Note to Sea for people in their 20's who has just entered the workforce. It's a figma prototype where the users write down something that they did or felt proud of doing that day. This note would then be folded physically or digitally into a paper boat and sent off to sea. The boats gather at 12 harbours symbolizing the 12 months in a year in order for users to look back and recognize their progress at a time in their lives where that feeling might not be as frequent.",
      image: "/projects/note-to-sea.png",
      imageAlt: "Note to Sea concept imagery",
    },
    {
      title: "SL Improvement Concept",
      year: 2024,
      category: "study",
      description:
        "UX concept study proposing improvements to Stockholm's public transit app.",
        longDescription:
            "A participatory design project carried out together with several disability organisations, working directly with people with visual, hearing and learning disabilities/impairments. The service our group was assigned to improve was SL, Stockholms public transport system. We worked high on the ladder of participation, the participants were collaborators shaping the concept further in all stages of the process until a final concept for the SL app and website were created. This project made clear that there is a lot of work to be done on websites to meet the new EU regulations for how accessible websites have to be for everyone to be able to use comfortably.",
      image: "/projects/sl-concept.JPG",
      imageAlt: "SL app concept screens",
    },
    {
      title: "Perception of Misinformation",
      year: 2025,
      category: "study",
      description:
        "User study on how interface design shapes trust in online information.",
        longDescription:
            "A VR study on how AI-driven social cues shape what people believe. Using a Meta headset, participants watched 20 videos alongside virtual agents that reacted to it in real time, and we measured how these reactions shifted the participants' own judgements on if the videos were true or lies. The study formed a part of a larger study researching how AI influences the perception of misinformation in virtual environments, which is a question that gets more relevant as social VR spaces grow.",
      image: "/projects/misinformation.png",
      imageAlt: "Misinformation study material",
    },
  ] satisfies Project[],

  tech: [
    "Python",
    "JavaScript",
    "Java",
    "TypeScript",
    "C#",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "Unity 3D",
  ],

  education: [
  {
    degree: "MSc Interactive Media Technology",
    school: "KTH Royal Institute of Technology",
    period: "2025 —",
    logo: "/logos/kth-v2.png",
  },
  {
    degree: "BSc Media Technology, Game Design",
    school: "Södertörn University",
    period: "2021 — 2024",
    logo: "/logos/sodertorn-v2.png",
  },
  {
    degree: "Medical Engineering (one year)",
    school: "Uppsala University",
    period: "2020 — 2021",
    logo: "/logos/uppsala-v4.png",
  },
],

  footer: {
    headline: "Let's work together.",
    subline: "Open to internships & research opportunities.",
  },
};