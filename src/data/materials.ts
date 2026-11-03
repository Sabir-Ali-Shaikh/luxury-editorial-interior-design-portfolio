export type Material = {
  id: string;
  name: string;
  variant: string;
  image: string;
  alt: string;
  objectPosition?: string;
  sourceUrl: string;
  photographer: string;
};

export const materials: Material[] = [
  {
    id: "velvet",
    name: "VELVET",
    variant: "Oxblood",
    image: "/images/materials/velvet-oxblood.jpeg",
    alt: "Close-up of rich oxblood velvet fabric with soft folds and warm directional light.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/4112799/pexels-photo-4112799.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
  {
    id: "timber",
    name: "TIMBER",
    variant: "Dark Walnut",
    image: "/images/materials/timber-dark-walnut.jpeg",
    alt: "Dark walnut wood grain with warm natural tones and fine organic texture.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/8337527/pexels-photo-8337527.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
  {
    id: "marble",
    name: "MARBLE",
    variant: "Veined Stone",
    image: "/images/materials/marble-veined-stone.jpeg",
    alt: "White marble stone with dramatic grey veining and polished architectural finish.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/3847492/pexels-photo-3847492.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
  {
    id: "metal",
    name: "METAL",
    variant: "Brushed Brass",
    image: "/images/materials/metal-brushed-brass.jpeg",
    alt: "Warm brushed brass metal with soft reflections and architectural detailing.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/7605492/pexels-photo-7605492.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
  {
    id: "upholstery",
    name: "UPHOLSTERY",
    variant: "Emerald",
    image: "/images/materials/upholstery-emerald.jpeg",
    alt: "Emerald green upholstered fabric with soft folds and rich textile texture.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/7641223/pexels-photo-7641223.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
  {
    id: "linen",
    name: "LINEN",
    variant: "Natural",
    image: "/images/materials/linen-natural.jpeg",
    alt: "Natural linen texture in warm ivory tones with soft woven folds.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/4862928/pexels-photo-4862928.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
  {
    id: "stone",
    name: "STONE",
    variant: "Carved",
    image: "/images/materials/stone-carved.jpeg",
    alt: "Warm carved stone with natural texture and sculptural architectural form.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/33625926/pexels-photo-33625926/free-photo-of-rustic-stone-pedestal-with-green-ivy-vines.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
  {
    id: "lighting",
    name: "LIGHTING",
    variant: "Architectural",
    image: "/images/materials/lighting-architectural.jpeg",
    alt: "Architectural brass pendant lamp in warm light against a dark backdrop.",
    objectPosition: "center",
    sourceUrl: "https://images.pexels.com/photos/6612784/pexels-photo-6612784.jpeg?h=1000&w=1500&fit=crop",
    photographer: "Pexels contributor metadata not exposed in the stock search result page.",
  },
];
