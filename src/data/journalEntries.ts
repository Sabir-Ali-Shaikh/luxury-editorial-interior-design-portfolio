export type JournalEntry = {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  image: string;
  alt: string;
  href: string;
};

export const journalEntries: JournalEntry[] = [
  {
    id: "quiet-light",
    title: "Quiet luxury in layered light",
    category: "Residential",
    publishedAt: "May 09, 2026",
    image: "/images/projects/heritage-apartment.jpg",
    alt: "Warm residential interior with sculptural furniture and soft layered lighting.",
    href: "/journal/quiet-light",
  },
  {
    id: "atmosphere-materials",
    title: "The architecture of atmosphere",
    category: "Materials",
    publishedAt: "Apr 17, 2026",
    image: "/images/projects/sculpted-penthouse.jpg",
    alt: "Luxury penthouse interior with polished stone, warm wood, and architectural proportions.",
    href: "/journal/architecture-of-atmosphere",
  },
  {
    id: "rituals-home",
    title: "Household rituals in motion",
    category: "Living",
    publishedAt: "Mar 26, 2026",
    image: "/images/projects/villa-nocturne.jpg",
    alt: "Elegant villa interior with moody textures, natural light, and designed day-to-day routines.",
    href: "/journal/household-rituals",
  },
];
