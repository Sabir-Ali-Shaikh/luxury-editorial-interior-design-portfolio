export type PortfolioCategory = "All" | "Residential" | "Commercial" | "Hospitality";

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  location: string;
  year: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const portfolioCategories: PortfolioCategory[] = ["All", "Residential", "Commercial", "Hospitality"];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "merlot-residence",
    slug: "merlot-residence",
    title: "The Merlot Residence",
    category: "Residential",
    location: "London",
    year: "2024",
    image: "/images/projects/merlot-residence.jpg",
    imageAlt: "Dark luxury living room with warm lighting and a burgundy sofa in a contemporary residence.",
    featured: true,
  },
  {
    id: "house-of-stillness",
    slug: "house-of-stillness",
    title: "House of Stillness",
    category: "Residential",
    location: "Cotswolds",
    year: "2023",
    image: "/images/projects/house-of-stillness.jpg",
    imageAlt: "Minimalist residential interior with warm stone textures and soft natural light.",
  },
  {
    id: "emerald-courtyard",
    slug: "emerald-courtyard",
    title: "Emerald Courtyard",
    category: "Residential",
    location: "Barcelona",
    year: "2024",
    image: "/images/projects/emerald-courtyard.jpg",
    imageAlt: "Mediterranean courtyard with arches, greenery, and warm stone architecture.",
  },
  {
    id: "heritage-apartment",
    slug: "heritage-apartment",
    title: "The Heritage Apartment",
    category: "Residential",
    location: "Paris",
    year: "2023",
    image: "/images/projects/heritage-apartment.jpg",
    imageAlt: "Elegant Parisian interior with classical details and refined material finishes.",
  },
  {
    id: "villa-nocturne",
    slug: "villa-nocturne",
    title: "Villa Nocturne",
    category: "Residential",
    location: "Ibiza",
    year: "2024",
    image: "/images/projects/villa-nocturne.jpg",
    imageAlt: "Luxury villa interior lit by evening light with a dramatic indoor-outdoor atmosphere.",
  },
  {
    id: "sculpted-penthouse",
    slug: "sculpted-penthouse",
    title: "The Sculpted Penthouse",
    category: "Residential",
    location: "New York",
    year: "2024",
    image: "/images/projects/sculpted-penthouse.jpg",
    imageAlt: "High-end penthouse interior with sculptural furniture and skyline views.",
  },
];
