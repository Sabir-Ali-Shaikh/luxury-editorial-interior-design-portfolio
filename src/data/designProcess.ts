export type DesignProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const designProcessSteps: DesignProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description: "We begin with a conversation — understanding your needs, lifestyle and aspirations.",
  },
  {
    id: "envision",
    number: "02",
    title: "Envision",
    description: "Ideas take shape through concepts, mood and spatial direction.",
  },
  {
    id: "refine",
    number: "03",
    title: "Refine",
    description: "We develop and perfect the design — materials, detailing and bespoke elements.",
  },
  {
    id: "realise",
    number: "04",
    title: "Realise",
    description: "A seamless, collaborative delivery that brings your space to life with intention and care.",
  },
];
