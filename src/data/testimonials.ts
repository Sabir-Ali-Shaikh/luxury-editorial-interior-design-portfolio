export type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  projectName: string;
  verified: boolean;
  sampleLabel?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "merlot-residence",
    quote:
      "Atelier transformed our home into a space that feels both deeply personal and beautifully timeless. Every detail was considered, and the result exceeds all our expectations.",
    clientName: "A. & M. Collins",
    projectName: "The Merlot Residence",
    verified: false,
    sampleLabel: "ILLUSTRATIVE CLIENT WORDS",
  },
  {
    id: "house-of-stillness",
    quote:
      "From the first conversation to the final details, the design felt thoughtful, intuitive and completely aligned with the way we wanted to live.",
    clientName: "Sample Client 02",
    projectName: "House of Stillness",
    verified: false,
    sampleLabel: "ILLUSTRATIVE CLIENT WORDS",
  },
  {
    id: "emerald-courtyard",
    quote:
      "The balance of beautiful materials, natural light and considered spaces created an atmosphere that feels both effortless and extraordinary.",
    clientName: "Sample Client 03",
    projectName: "Emerald Courtyard",
    verified: false,
    sampleLabel: "ILLUSTRATIVE CLIENT WORDS",
  },
];
