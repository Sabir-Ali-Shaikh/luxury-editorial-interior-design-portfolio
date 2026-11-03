export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const navigationItems: NavItem[] = [
  { label: "Home", href: "#home", active: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];
