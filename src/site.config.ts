export type ProjectCategory = "programming" | "study";

export interface Project {
  title: string;
  year: number;
  category: ProjectCategory;
  description: string;
  longDescription?: string;  
  image: string;
  imageAlt: string;
  links?: {                
    label: string;
    href: string;
    download?: boolean;
  }[];
}

export const config = {
  person: {
    name: "Kimmy Karlsson",
    location: "Stockholm",
    linkedin: "https://www.linkedin.com/in/kimmy-karlsson-63409a255/",   
    email: "kimmykochar01@outlook.com",                           
    cvPath: "/cv.pdf",                                   
  },

  hero: {
    eyebrow: "PORTFOLIO · KIMMY KARLSSON · SWEDEN",
    titleBefore: "Hi, I'm ",
    titleHighlight: "Kimmy!",
    titleAfter: " Here is my work.",
    subtitle:
      "Last year of my MSc in Interactive Media Technology at KTH, building interactive work combining user studies and programming. Currently working with the Let's Uptech Initiative at Knightec Group",
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
            "We were asked to design a ritual for a context that lacks one, and picked the first years of a graduate's working life. We ran eight semi structured interviews and clustered the results into four problem areas. What we found was that small achievements go almost entirely unmarked at work, and imposter syndrome fills the space instead. People wanted recognition, but not the kind that puts them on display. A 'worst possible idea' workshop made that concrete: nearly every obvious celebration feature fails for the same reason, because making recognition public turns it into performance. So we built the opposite. You write down one thing you're proud of, fold it into a paper boat, and send it out anonymously. The boats gather at twelve harbours, one per month, so the months becomes something you can look back at in your own personal ritualistic way.",
      image: "/projects/note-to-sea.png",
      imageAlt: "Note to Sea concept imagery",
    },
    {
      title: "Perception of Misinformation",
      year: 2024,
      category: "study",
      description:
        "User study on how interface design shapes trust in online information.",
        longDescription:
            "A VR study on whether AI driven social cues change what people believe. 17 participants watched 12 short-form videos in a Meta headset alongside virtual agents that reacted to the content in real time, and we thematically analysed how they reasoned about what was true and what was not. What we found was less about influence and more about role. Participants did not treat the agents as sources of fact at all. They read them as social commentators, closer to a comment section than a fact checker, and weighed their reactions accordingly. The study was part of a larger project on how AI shapes misinformation perception in immersive environments.",
      image: "/projects/misinformation.png",
      imageAlt: "Misinformation study material",
    },
    {
      title: "SL Improvement Concept",
      year: 2025,
      category: "study",
      description:
        "UX concept study proposing improvements to Stockholm's public transit app.",
        longDescription:
            "A participatory design project with disability organisations, redesigning parts of Stockholm's public transport service. We started with automated accessibility testing, which flagged only 16 minor issues on the SL website plus text sizing, touch target and contrast problems in the app. Then we sat down with expert user consultants who use the service every day. What we found was that almost nothing that actually mattered had been caught by the tools. The barrier was not the interface, it was the journey: no live guidance on where you are, which train is yours, or what to do when something changes. That finding reframed the whole project, and we ended up designing concepts for a haptic guidance companion working alongside a rebuilt app, with the consultants shaping every iteration in order for it to accommodate various needs.",
      image: "/projects/sl-concept.JPG",
      imageAlt: "SL app concept screens",
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
    period: "2025 to present",
    logo: "/logos/kth-v2.png",
  },
  {
    degree: "BSc Media Technology, Game Design",
    school: "Södertörn University",
    period: "2021 to 2024",
    logo: "/logos/sodertorn-v2.png",
  },
  {
    degree: "Medical Engineering",
    school: "Uppsala University",
    period: "2020 to 2021",
    logo: "/logos/uppsala-v4.png",
  },
],

  footer: {
    headline: "Let's work together.",
    subline: "Open to internships & research opportunities.",
  },
};