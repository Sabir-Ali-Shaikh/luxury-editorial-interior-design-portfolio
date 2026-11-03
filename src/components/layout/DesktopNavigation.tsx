import { motion } from "motion/react";
import { navigationItems } from "@/data/navigation";

export function DesktopNavigation() {
  return (
    <nav aria-label="Main navigation" className="hidden lg:flex lg:items-center lg:justify-center">
      <ul className="flex items-center gap-7 xl:gap-9">
        {navigationItems.map((item, index) => (
          <li key={item.label} className="relative">
            <motion.a
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className="group relative inline-flex items-center py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ivory/90 transition-colors duration-300 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.14 + index * 0.06 }}
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-0 right-0 h-px origin-left bg-[#d9c29d] transition-transform duration-300 ${item.active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
