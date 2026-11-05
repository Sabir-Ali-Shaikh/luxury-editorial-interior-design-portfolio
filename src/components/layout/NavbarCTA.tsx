import { ArrowRight } from "lucide-react";

export function NavbarCTA() {
  return (
    <a
      href="#contact"
      className="group hidden items-center gap-2 border border-[#d9c29d] bg-transparent px-5 py-2 text-[0.64rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#d9c29d] hover:text-[#110d0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory lg:inline-flex"
    >
      <span>Start a Project</span>
      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}
