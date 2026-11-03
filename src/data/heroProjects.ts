export type HeroProject = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  headline: [string, string];
  description: string;
};

export const heroProjects: HeroProject[] = [
  {
    id: "merlot-residence",
    title: "The Merlot Residence",
    image: "/images/hero/merlot-residence.jpg",
    imageAlt: "Warm luxury living room with a deep burgundy sofa and sculptural interior details.",
    headline: ["Spaces with a soul.", "Designed to endure."],
    description: "Bespoke interiors shaped by emotion, material, and the art of living beautifully.",
  },
];
