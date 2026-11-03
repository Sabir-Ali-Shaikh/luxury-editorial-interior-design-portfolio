import Link from "next/link";

export function NavbarBrand() {
  return (
    <Link
      href="#home"
      className="group inline-flex flex-col items-start text-ivory transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
      aria-label="ATELIER home"
    >
      <span className="font-heading text-[1.7rem] uppercase tracking-[0.12em] leading-none md:text-[1.85rem]">
        ATELIER
      </span>
      <span className="mt-1 text-[0.5rem] uppercase tracking-[0.22em] text-ivory/75 md:text-[0.56rem]">
        INTERIOR DESIGN
      </span>
    </Link>
  );
}
