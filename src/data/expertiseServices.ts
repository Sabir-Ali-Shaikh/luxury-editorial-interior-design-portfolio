export type ExpertiseService = {
  id: string;
  number: string;
  title: string;
  description: string;
  href?: string;
};

export const expertiseServices: ExpertiseService[] = [
  {
    id: "residential-interior-design",
    number: "01",
    title: "Residential Interior Design",
    description: "Bespoke, liveable homes tailored to your lifestyle and vision.",
  },
  {
    id: "luxury-space-planning",
    number: "02",
    title: "Luxury Space Planning",
    description: "Intelligent, elegant layouts that enhance flow, light and daily living.",
  },
  {
    id: "interior-styling-art-direction",
    number: "03",
    title: "Interior Styling & Art Direction",
    description: "A curated approach to furniture, art, objects and atmosphere.",
  },
  {
    id: "bespoke-furniture-material-curation",
    number: "04",
    title: "Bespoke Furniture & Material Curation",
    description: "Custom pieces and refined material palettes for a truly unique space.",
  },
];
